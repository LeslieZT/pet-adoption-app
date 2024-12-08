import { API_ENDPOINTS } from "../constants/api";
import { postRequest } from "../utils/AxiosClient";

const { SEND_CONTACT_MESSAGE } = API_ENDPOINTS;

export const sendContact = async (data: { email: string; message: string }) => {
  const response = await postRequest(SEND_CONTACT_MESSAGE, data);
  return response;
};
