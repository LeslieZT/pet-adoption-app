export enum PaymentMode {
  ONE_TIME = "payment",
  SUBSCRIPTION = "subscription",
}

export interface DonationRequest {
  code: string;
  mode: PaymentMode;
  amount?: number;
  idUser?: string;
  channel?: string;
}

export interface CustomDonationRequest {
  mode: PaymentMode;
  amount: number;
  idUser?: string;
  channel?: string;
}

export interface DonationResponse {
  url: string;
}

export interface DonationUserResponse {
  donationId: string;
  createdAt: Date;
  type: string;
  status: string;
  plan: {
    name: true;
    price: number;
  };
}
