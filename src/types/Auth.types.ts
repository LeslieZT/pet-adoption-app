export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expiresAt: number;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
}

export interface SignInOAuthRequest {
  provider: string;
}

export interface SignInOAuthResponse {
  provider: string;
  url: string;
}

export interface SignInWithOAuthCallbackRequest {
  provider: string;
  accessToken: string;
}
