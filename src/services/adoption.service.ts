import { API_ENDPOINTS } from "../constants/api";
import { ChannelType } from "../enum/ChannelType.enum";
import { AuthCredentials } from "../store/Auth.store.type";
import { AdoptionApplicationResponse, CreateAdoptioApplication } from "../types/Adoption.types";
import { ResponseApi } from "../types/Api.types";
import { postRequest, getRequest } from "../utils/AxiosClient";

const { FIND_ALL_ADOPTION_PLANS, CREATE_ADOPTION_APPLICATION } = API_ENDPOINTS;

export const findAllByUser = async (channel: ChannelType, credentials: AuthCredentials) => {
  const response = await getRequest<ResponseApi<AdoptionApplicationResponse[]>>(
    FIND_ALL_ADOPTION_PLANS,
    {
      headers: {
        "X-Channel": `${channel}`,
        Authorization: `Bearer ${credentials.accessToken}`,
      },
    },
  );
  return response;
};

export const create = async (
  params: CreateAdoptioApplication,
  channel: ChannelType,
  credentials: AuthCredentials,
) => {
  const response = await postRequest<ResponseApi<AdoptionApplicationResponse>>(
    CREATE_ADOPTION_APPLICATION,
    params,
    {
      headers: {
        "X-Channel": channel,
        Authorization: `Bearer ${credentials.accessToken}`,
      },
    },
  );
  return response;
};
