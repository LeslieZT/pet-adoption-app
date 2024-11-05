interface PetBehavior {
    id: string
    label: string
}
  
interface PetLocation {
    address: string
    shelterName: string
    phone: string
    latitud: number
    longitud: number
}

interface PetImage {
    id: string
    url: string
}

export interface PetInfo {
    id: string;
    name:string;
    referenceCode: string
    description: string
    breed: string
    weight: string
    height: string
    color: string
    age: string
    gender: "female" | "male"
    category : "Dog" | "Cat" | "Bird" | "Rabbit" | "Hamster" | "Fish";
    isFavorite: boolean
    behavior: PetBehavior[]
    location: PetLocation
    images: PetImage[]
}
  
