import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../constants/constants";

export const API_CLIENT = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

interface AxiosRequestConfig {
  headers?: Record<string, string>;
}

export const getRequest = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await API_CLIENT.get(url, {
    ...options,
  });
  return response.data;
};

export const postRequest = async <T>(
  url: string,
  data: unknown,
  options?: AxiosRequestConfig,
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await API_CLIENT.post(url, data, {
            ...options,
          });
          return response.data;
    } catch (error: any) {
        if(error.response.status !== 500) {
            console.error(error.response.data.error);
            throw new Error(error.response.data.error.message);
        }
        throw error;
    }
  
};

export const putRequest = async <T>(
  url: string,
  data: unknown,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await API_CLIENT.put(url, data, {
    ...options,
  });
  return response.data;
};

export const deleteRequest = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await API_CLIENT.delete(url, {
    ...options,
  });
  return response.data;
};
