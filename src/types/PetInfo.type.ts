export interface ShelterLocation {
  name: string;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  email: string;
  district: string;
  province: string;
  department: string;
}

export interface PetInfo {
  petId: number;
  name: string;
  description: string;
  birthdate: Date;
  age: string;
  weight: string;
  height: string;
  gender: "male" | "female";
  color: string;
  behavior: string[];
  profilePicture: string;
  breed: string;
  shelter: ShelterLocation;
  photos: string[];
  isFavorite: boolean;
  applications: number;
}
