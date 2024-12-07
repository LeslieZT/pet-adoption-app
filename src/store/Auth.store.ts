import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { SignInOAuthResponse } from "./../types/Auth.types";
import { AuthState, SignInWithOAuthCallbackRequest } from "./Auth.store.type";
import { SignInRequest, SignUpRequest } from "../types/Auth.types";
import { ChannelType } from "../enum/ChannelType.enum";
import * as AuthService from "../services/auth.service";
import * as UserService from "../services/user.service";
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
            const credentials = get().credential!;
            const { data: userData } = await UserService.getUser(credentials, get().channel);      
            if (userData) {           
              set({ user: { ...userData } });
            }
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
            const credentials = get().credential!;
            const { data: userData } = await UserService.getUser(credentials, get().channel);
            console.log(userData);
            if (userData) {
              set({ user: userData });
            }
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

        updateUser: async (params: Partial<User>) => {
          try {
            const credentials = get().credential!;

            if(params.districtId){
              params.districtId = parseInt(params.districtId as unknown as string);
            }

            const { data: userData } = await UserService.updateUser(
              credentials,
              get().channel,
              params,
            );
            if (userData) {              
              set({ user: { ...get().user!, ...params } });
            }
          } catch (error) {
            console.error("Error en updateUser:", error);
            throw error;
          }
        },
        setUser: (params: Partial<User>) => set({ user: { ...get().user!, ...params } }),
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
