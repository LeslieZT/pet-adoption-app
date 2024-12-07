import { API_ENDPOINTS } from "../constants/api";
import { ChannelType } from "../enum/ChannelType.enum";
import { AuthCredentials } from "../store/Auth.store.type";
import { ResponseApi } from "../types/Api.types";
import { FileUploadResponse } from "../types/Storage";
import { postRequest } from "../utils/AxiosClient";

const { UPLOAD_FILE } = API_ENDPOINTS;

export const uploadFile = async (
  credentials: AuthCredentials,
  channel: ChannelType,
  formData: FormData,
) => {
  const response = await postRequest<ResponseApi<FileUploadResponse[]>>(UPLOAD_FILE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Channel": channel,
      Authorization: `Bearer ${credentials.accessToken}`,
    },
  });
  return response;
};
