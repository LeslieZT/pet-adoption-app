export interface CreateAdoptioApplication {
  petId: number;
  application: Record<string, any>;
}

export interface AdoptionApplicationResponse {
  id: number;
  petId: number;
  petName: string;
  status: string;
  petCategory: string;
  createdAt: string;
}
