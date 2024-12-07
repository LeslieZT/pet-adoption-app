interface OptionsFieldDto {
  placeId: string;

  placeLevel: string;
}

interface AgeFieldDto {
  minAge: number;

  maxAge?: number;
}

export interface FindAllRequest {
  idUser?: string;

  location?: string;

  petType?: number;

  gender?: string;

  option?: OptionsFieldDto;

  age?: AgeFieldDto;

  page?: number;

  limit?: number;
}

export interface PetResult {
  petId: number;
  categoryId: number;
  name: string;
  profilePicture: string;
  gender: string;
  breedId: number;
  birthdate: Date;
  totalMonths: string;
  shelterName: string;
  shelterId: string;
  address: string;
  districtId: number;
  provinceId: number;
  departmentId: number;
  isFavorite: boolean;
}

export interface FindAllResponse {
  total: number;
  data: PetResult[];
}

export interface PetBreed {
  petBreedId: number;
  name: string;
  ategoryId: number;
}

export interface PetCategory {
  value: number;
  label: string;
}
