export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: {
    fileName: string;
    url: string;
    publicId: string;
  };
  birthdate?: string;
  phone?: string;
  address?: string;
  channel?: string;
  districtId?: number;
  provinceId?: number;
  departmentId?: number;
}

export interface UpdateUserResponse {
  message: string;
}
