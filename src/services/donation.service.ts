import { API_ENDPOINTS } from "../constants/api";
import { ResponseApi } from "../types/Api.types";
import {
  CustomDonationRequest,
  DonationRequest,
  DonationResponse,
  DonationUserResponse,
} from "../types/Donation.types";
import { getRequest, postRequest } from "../utils/AxiosClient";

const { DONATION_CHECKOUT, CUSTOM_DONATION_CHECKOUT, FIND_ALL_DONATION_USER } = API_ENDPOINTS;

export const donate = async (params: DonationRequest): Promise<ResponseApi<DonationResponse>> => {
  const response = await postRequest<ResponseApi<DonationResponse>>(DONATION_CHECKOUT, params);
  return response;
};

export const makeCustomDonation = async (
  params: CustomDonationRequest,
): Promise<ResponseApi<DonationResponse>> => {
  const response = await postRequest<ResponseApi<DonationResponse>>(
    CUSTOM_DONATION_CHECKOUT,
    params,
  );
  return response;
};

export const findAllByUser = async (channel: string, credentials: any) => {
  const response = await getRequest<ResponseApi<DonationUserResponse[]>>(FIND_ALL_DONATION_USER, {
    headers: {
      "X-Channel": `${channel}`,
      Authorization: `Bearer ${credentials.accessToken}`,
    },
  });
  return response;
};
