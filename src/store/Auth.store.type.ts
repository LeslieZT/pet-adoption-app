import { ChannelType } from "../enum/ChannelType.enum";
import { ResponseApi } from "../types/Api.types";
import { SignInOAuthResponse, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../types/Auth.types";

interface AuthCredentials {   
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expiresAt: number;
}

export interface SignInWithOAuthCallbackRequest {
    provider: string
    credential: AuthCredentials
}

export interface AuthState {
    isAuthenticated: boolean;
    channel: ChannelType
    user: Record<string, unknown> | null;
    credential: AuthCredentials | null;
    signIn: (params: SignInRequest) => Promise<ResponseApi<SignInResponse>>;
    signUp: (params: SignUpRequest) => Promise<ResponseApi<SignUpResponse>>;
    signInWithOAuth: (provider: string) => Promise<SignInOAuthResponse>;
    signInWithOAuthCallback: (params: SignInWithOAuthCallbackRequest) => void;
    signOut: () => void;
    setChhanel: (channel: ChannelType) => void;
  }

