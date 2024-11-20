import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { SignInOAuthResponse } from "./../types/Auth.types";
import { AuthState, SignInWithOAuthCallbackRequest } from "./Auth.store.type";
import { SignInRequest, SignUpRequest } from "../types/Auth.types";
import { ChannelType } from "../enum/ChannelType.enum";
import * as AuthService from "../services/auth.service";

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
              { provider: params.provider, accessToken: params.credential.accessToken },
              get().channel,
            );
            set({ credential: params.credential, isAuthenticated: true });
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
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
