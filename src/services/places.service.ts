import { API_ENDPOINTS } from "../constants/api";
import { ResponseApi } from "../types/Api.types";
import { DepartmentResult } from "../types/Places.types";
import { getRequest } from "../utils/AxiosClient";

const { GET_DEPARTMENTS } = API_ENDPOINTS;

export const getDepartment = async (): Promise<ResponseApi<DepartmentResult[]>> => {
  const response = await getRequest<ResponseApi<DepartmentResult[]>>(GET_DEPARTMENTS);
  return response;
};
