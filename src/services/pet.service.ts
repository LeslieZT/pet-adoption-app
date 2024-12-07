import { API_ENDPOINTS } from "../constants/api";
import { ChannelType } from "../enum/ChannelType.enum";
import { AuthCredentials } from "../store/Auth.store.type";
import { ResponseApi } from "../types/Api.types";
import { FindAllRequest, FindAllResponse, PetBreed, PetCategory } from "../types/Pet";
import { PetInfo } from "../types/PetInfo.type";
import { getRequest, postRequest } from "../utils/AxiosClient";

const {
  GET_PETS,
  GET_PET_BREEDS,
  GET_PET_CATEGORIES,
  GET_PET_BY_ID,
  MARK_AS_FAVORITE,
  GET_FAVORITE_PETS,
} = API_ENDPOINTS;

export const findAllPets = async (
  params: FindAllRequest,
): Promise<ResponseApi<FindAllResponse>> => {
  const response = await postRequest<ResponseApi<FindAllResponse>>(GET_PETS, params, {});
  return response;
};

export const getPetBreeds = async (): Promise<ResponseApi<Record<string, PetBreed>>> => {
  const response = await getRequest<ResponseApi<Record<string, PetBreed>>>(GET_PET_BREEDS);
  return response;
};

export const getPetCategories = async (): Promise<ResponseApi<PetCategory[]>> => {
  const response = await getRequest<ResponseApi<PetCategory[]>>(GET_PET_CATEGORIES);
  return response;
};

export const getPetById = async (id: number, userId?: string): Promise<ResponseApi<PetInfo>> => {
  const response = await postRequest<ResponseApi<PetInfo>>(
    GET_PET_BY_ID,
    { petId: id, userId },
    {},
  );
  return response;
};

export const markAsFavorite = async (
  credentials: AuthCredentials,
  channel: ChannelType,
  params: { petId: number; value: boolean },
): Promise<ResponseApi<PetInfo>> => {
  const response = await postRequest<ResponseApi<PetInfo>>(
    MARK_AS_FAVORITE,
    { ...params },
    {
      headers: {
        "X-Channel": channel,
        Authorization: `Bearer ${credentials.accessToken}`,
      },
    },
  );
  return response;
};

export const getFavoritePets = async (
  credentials: AuthCredentials,
  channel: ChannelType,
  params: { page: number; limit: number },
): Promise<ResponseApi<FindAllResponse>> => {
  const response = await postRequest<ResponseApi<FindAllResponse>>(
    GET_FAVORITE_PETS,
    { ...params },
    {
      headers: {
        "X-Channel": channel,
        Authorization: `Bearer ${credentials.accessToken}`,
      },
    },
  );
  return response;
};
