import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { SignInOAuthResponse } from "./../types/Auth.types";
import { AuthState, SignInWithOAuthCallbackRequest } from "./Auth.store.type";
import { SignInRequest, SignUpRequest } from "../types/Auth.types";
import { ChannelType } from "../enum/ChannelType.enum";
import * as AuthService from "../services/auth.service";
import { User } from "../types/User.types";

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,
        channel: ChannelType.ADOPTION,
        credential: null,
        signIn: async (params: SignInRequest) => {
          try {
            const response = await AuthService.signIn(params, get().channel);
            set({ isAuthenticated: true, credential: response.data });
            //
            set({
              user: {
                id: "dfd2cb8d-d030-4f60-970c-9180db2dbe01",
                firstName: "John Doe",
                channel: ChannelType.ADOPTION,
                lastName: "Doe",
                email: "john@example.com",
                avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
              },
            });
            return response;
          } catch (error) {
            console.error("Error en signIn:", error);
            throw error;
          }
        },
        signUp: async (params: SignUpRequest) => {
          try {
            const response = await AuthService.signUp(params, get().channel);
            return response;
          } catch (error) {
            console.error("Error en signUp:", error);
            throw error;
          }
        },
        signInWithOAuth: async (provider: string): Promise<SignInOAuthResponse> => {
          try {
            const response = await AuthService.signInWithOAuth({ provider }, get().channel);
            return response.data!;
          } catch (error) {
            console.error("Error en signInWithOAuth:", error);
            throw error;
          }
        },
        signInWithOAuthCallback: async (params: SignInWithOAuthCallbackRequest) => {
          try {
            await AuthService.signInWithOAuthCallback(
              {
                provider: params.provider,
                accessToken: params.credential.accessToken,
              },
              get().channel,
            );
            set({ credential: params.credential, isAuthenticated: true });
            //
            set({
              user: {
                id: "dfd2cb8d-d030-4f60-970c-9180db2dbe01",
                channel: ChannelType.ADOPTION,
                firstName: "John Doe",
                lastName: "Doe",
                email: "john@example.com",
                avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
              },
            });
          } catch (error) {
            console.error("Error en signInWithOAuthCallback:", error);
            throw error;
          }
        },
        signOut: () => {
          set({ isAuthenticated: false, credential: null, user: null });
        },
        setChhanel: (channel: ChannelType) => {
          set({ channel });
        },
        setUser: (user: User) => {
          set({ user });
        },
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
