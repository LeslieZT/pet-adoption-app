import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiCalendar, HiGlobe, HiHome, HiMail, HiUser } from "react-icons/hi";
import { UserProfileFormData, UserProfileSchema } from "../../schema/UserProfile.schema";
import { Heading } from "../../components/Typography";
import { CustomButton } from "../../components/Buttons";
import { InputField } from "../../components/Forms";

export const UserProfileForm = () => {
  const { control, handleSubmit, reset } = useForm<UserProfileFormData>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthdate: "",
      homeAddress: "",
      country: "",
      state: "",
      province: "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data: UserProfileFormData) => {
    console.log({ data });
  };

  useEffect(() => {
    // Llamada a la API para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
        const data = {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          birthdate: "1990-01-01",
          homeAddress: "123 Main St",
          country: "United States",
          state: "New York",
          province: "New York",
        };
        reset({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          birthdate: data.birthdate,
          homeAddress: data.homeAddress,
          country: data.country,
          state: data.state,
          province: data.province,
        });
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [reset]);

  return (
    <div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          level="3"
          color="royal-purple"
          className="font-bold"
        >
          Profile
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="firstName"
            control={control}
            label="First Name"
            icon={HiUser}
            placeholder="John"
            disabled={!isEditing}
          />
          <InputField
            name="lastName"
            control={control}
            label="Last Name"
            icon={HiUser}
            // placeholder="Doe"
            disabled={!isEditing}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="birthdate"
            control={control}
            label="Birthdate"
            type="date"
            icon={HiCalendar}
            disabled={!isEditing}
          />
          <InputField
            name="email"
            control={control}
            label="Email"
            type="email"
            icon={HiMail}
            // placeholder="name@example.com"
            disabled={!isEditing}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="homeAddress"
            control={control}
            label="Home Address"
            icon={HiHome}
            placeholder="123 Main St"
            disabled={!isEditing}
          />
          <InputField
            name="country"
            control={control}
            label="Country"
            icon={HiGlobe}
            placeholder="Select your country"
            disabled={!isEditing}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="state"
            control={control}
            label="State/Department"
            placeholder="Your state"
            disabled={!isEditing}
          />
          <InputField
            name="province"
            control={control}
            label="Province"
            placeholder="Your province"
            disabled={!isEditing}
          />
        </div>

        {isEditing && (
          <CustomButton
            type="submit"
            color="royal-purple"
          >
            Save
          </CustomButton>
        )}
      </form>
      {!isEditing && (
        <CustomButton
          color="royal-purple"
          onClick={() => setIsEditing(true)}
          className="w-full mt-4"
        >
          Update
        </CustomButton>
      )}
    </div>
  );
};
