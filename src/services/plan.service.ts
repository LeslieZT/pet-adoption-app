import { API_ENDPOINTS } from "../constants/api";
import { ResponseApi } from "../types/Api.types";
import { Plan } from "../types/Plan.types";
import { getRequest } from "../utils/AxiosClient";

const { LIST_PLANS } = API_ENDPOINTS;

export const getPlans = async (): Promise<ResponseApi<Plan[]>> => {
  const response = await getRequest<ResponseApi<Plan[]>>(LIST_PLANS);
  return response;
};
