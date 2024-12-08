import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { HiCalendar, HiGlobe, HiHome, HiMail, HiUser } from "react-icons/hi";
import { UserProfileFormData, UserProfileSchema } from "../../schema/UserProfile.schema";
import { Heading } from "../../components/Typography";
import { CustomButton } from "../../components/Buttons";
import { InputField, SelectField } from "../../components/Forms";
import { useAuthStore } from "../../store/Auth.store";
import { User } from "../../types/User.types";
import * as PlaceService from "../../services/places.service";
import { DepartmentResult } from "../../types/Places.types";

export const UserProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUser } = useAuthStore((state) => state);
  const [places, setPlaces] = useState<DepartmentResult[]>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [provinces, setProvinces] = useState<any>([]);
  const [districts, setDistricts] = useState<any>([]);

  const { control, handleSubmit, watch } = useForm<UserProfileFormData>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      birthdate: user?.birthdate && new Date(user?.birthdate).toISOString().split("T")[0],
      address: user?.address,
      phone: user?.phone,
      departmentId: user?.departmentId ? user?.departmentId.toString() : "",
      provinceId: user?.provinceId ? user?.provinceId.toString() : "",
      districtId: user?.districtId ? user?.districtId.toString() : "",
    },
  });

  const departmentId = watch("departmentId");
  const provinceId = watch("provinceId");

  console.log(departmentId, provinceId);

  const getDepartments = (data: DepartmentResult[]) => {
    try {
      const departments = data.map((item) => ({ value: item.departmentId, label: item.name }));
      setDepartments(departments);
    } catch (error) {
      console.log(error);
    }
  };

  const getProvinces = (data: DepartmentResult[]) => {
    try {
      const department = data.find((item) => String(item.departmentId) === departmentId);
      const provinces = department?.provinces.map((item) => ({
        value: item.provinceId,
        label: item.name,
      }));
      setProvinces(provinces);
    } catch (error) {
      console.log(error);
    }
  };

  const getDistricts = (data: DepartmentResult[]) => {
    try {
      const department = data.find((item) => String(item.departmentId) === departmentId);
      const province = department?.provinces.find((item) => String(item.provinceId) === provinceId);
      const districts = province?.districts.map((item) => ({
        value: item.districtId,
        label: item.name,
      }));
      setDistricts(districts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await PlaceService.getDepartment();
      if (response.data) {
        setPlaces(response.data);
        getDepartments(response.data);
        getProvinces(response.data);
        getDistricts(response.data);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (places.length > 0 && departmentId) {
      getProvinces(places);
    }
  }, [departmentId]);

  useEffect(() => {
    if (places.length > 0 && provinceId) {
      getDistricts(places);
    }
  }, [provinceId]);

  const onSubmit = async (data: UserProfileFormData) => {
    console.log({ data });
    await updateUser(data as Partial<User>);
    setIsEditing(false);
  };

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
          Perfil
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="firstName"
            control={control}
            label="Nombre"
            icon={HiUser}
            placeholder="Set your first name"
            disabled={!isEditing}
          />
          <InputField
            name="lastName"
            control={control}
            label="Apellido"
            icon={HiUser}
            placeholder="Set your last name"
            disabled={!isEditing}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="birthdate"
            control={control}
            label="Fecha de nacimiento"
            type="date"
            icon={HiCalendar}
            disabled={!isEditing}
          />
          <InputField
            name="email"
            control={control}
            label="Correo electrónico"
            type="email"
            icon={HiMail}
            // placeholder="name@example.com"
            disabled={true}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            name="address"
            control={control}
            label="Dirección"
            icon={HiHome}
            placeholder="123 Main St"
            disabled={!isEditing}
          />
          <SelectField
            name="departmentId"
            control={control}
            label="Departamento"
            icon={HiGlobe}
            options={departments}
            placeholder="Select your department"
            disabled={!isEditing}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            name="provinceId"
            control={control}
            label="Provincia"
            placeholder="Select your province"
            icon={HiGlobe}
            disabled={!isEditing}
            options={provinces}
          />
          <SelectField
            name="districtId"
            control={control}
            label="Distrito"
            icon={HiGlobe}
            placeholder="Select your district"
            disabled={!isEditing}
            options={districts}
          />
        </div>

        {isEditing && (
          <CustomButton
            type="submit"
            color="royal-purple"
          >
            Guardar
          </CustomButton>
        )}
      </form>
      {!isEditing && (
        <CustomButton
          color="royal-purple"
          onClick={() => setIsEditing(true)}
          className="w-full mt-4"
        >
          Actualizar
        </CustomButton>
      )}
    </div>
  );
};
