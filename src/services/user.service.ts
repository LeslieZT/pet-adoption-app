import { API_ENDPOINTS } from "../constants/api";
import { ChannelType } from "../enum/ChannelType.enum";
import { AuthCredentials } from "../store/Auth.store.type";
import { ResponseApi } from "../types/Api.types";
import { UpdateUserResponse, User } from "../types/User.types";
import { getRequest, putRequest } from "../utils/AxiosClient";

const { GET_USER, UPDATE_USER } = API_ENDPOINTS;

export const getUser = async (
  credential: AuthCredentials,
  channel: ChannelType,
): Promise<ResponseApi<User>> => {
  const response = await getRequest<ResponseApi<User>>(GET_USER, {
    headers: {
      "X-Channel": `${channel}`,
      Authorization: `Bearer ${credential.accessToken}`,
    },
  });
  return response;
};

export const updateUser = async (
  credential: AuthCredentials,
  channel: ChannelType,
  params: Partial<User>,
): Promise<ResponseApi<UpdateUserResponse>> => {
  const response = await putRequest<ResponseApi<UpdateUserResponse>>(UPDATE_USER, params, {
    headers: {
      "X-Channel": `${channel}`,
      Authorization: `Bearer ${credential.accessToken}`,
    },
  });
  return response;
};
