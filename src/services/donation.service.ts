import { API_ENDPOINTS } from "../constants/api";
import { ResponseApi } from "../types/Api.types";
import { CustomDonationRequest, DonationRequest, DonationResponse } from "../types/Donation.types";
import { postRequest } from "../utils/AxiosClient";

const { DONATION_CHECKOUT, CUSTOM_DONATION_CHECKOUT } = API_ENDPOINTS;

export const donate = async (params: DonationRequest): Promise<ResponseApi<DonationResponse>> => {
  const response = await postRequest<ResponseApi<DonationResponse>>(DONATION_CHECKOUT, params);
  return response;
};

export const makeCustomDonation = async (
  params: CustomDonationRequest,
): Promise<ResponseApi<DonationResponse>> => {
  const response = await postRequest<ResponseApi<DonationResponse>>(CUSTOM_DONATION_CHECKOUT, params);
  return response;
};
