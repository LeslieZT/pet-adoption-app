export interface SearchLocationRequest {
  search: string;
}

export interface SearchLocationResponse {
  placeId: string;
  departmentName: string;
  provinceName: string;
  districtName: string;
  placeLevel: string;
  fullLocation: string;
  shelterAddress: string;
}
