import { API_ENDPOINTS } from "../constants/api";
import { ResponseApi } from "../types/Api.types";
import { SearchLocationRequest, SearchLocationResponse } from "../types/Shelter.type";
import { postRequest } from "../utils/AxiosClient";

const { SEARCH_LOCATION } = API_ENDPOINTS;

export const searchLocation = async (
  params: SearchLocationRequest,
): Promise<ResponseApi<SearchLocationResponse[]>> => {
  const response = await postRequest<ResponseApi<SearchLocationResponse[]>>(
    SEARCH_LOCATION,
    params,
    {},
  );
  return response;
};
