import { API_ENDPOINTS } from "./../constants/api";
import { ResponseApi } from "../types/Api.types";
import {
  SignInOAuthRequest,
  SignInOAuthResponse,
  SignInRequest,
  SignInResponse,
  SignInWithOAuthCallbackRequest,
  SignUpRequest,
  SignUpResponse,
} from "../types/Auth.types";
import { postRequest } from "../utils/AxiosClient";
import { ChannelType } from "../enum/ChannelType.enum";

const { SIGN_UP, SIGN_IN, SIGN_IN_OAUTH, SIGN_IN_OAUTH_CALLBACK } = API_ENDPOINTS;
export const signUp = async (
  params: SignUpRequest,
  channel: ChannelType,
): Promise<ResponseApi<SignUpResponse>> => {
  const response = await postRequest<ResponseApi<SignUpResponse>>(SIGN_UP, params, {
    headers: { "X-Channel": channel },
  });
  return response;
};

export const signIn = async (
  params: SignInRequest,
  channel: ChannelType,
): Promise<ResponseApi<SignInResponse>> => {
  const response = await postRequest<ResponseApi<SignInResponse>>(SIGN_IN, params, {
    headers: { "X-Channel": channel },
  });
  return response;
};

export const signInWithOAuth = async (
  params: SignInOAuthRequest,
  channel: ChannelType,
): Promise<ResponseApi<SignInOAuthResponse>> => {
  const response = await postRequest<ResponseApi<SignInOAuthResponse>>(
    SIGN_IN_OAUTH,
    params,
    { headers: { "X-Channel": channel } },
  );
  return response;
};

export const signInWithOAuthCallback = async (
  params: SignInWithOAuthCallbackRequest,
  channel: ChannelType,
): Promise<ResponseApi<SignInOAuthResponse>> => {
  const response = await postRequest<ResponseApi<SignInOAuthResponse>>(
    SIGN_IN_OAUTH_CALLBACK,
    params,
    { headers: { "X-Channel": channel } },
  );
  return response;
};
