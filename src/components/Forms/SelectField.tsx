import { Label, Select } from "flowbite-react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  icon?: IconType; // Hacer el icono opcional
  options: { value: string; label: string }[];
  placeholder: string;
}

export const SelectField = <T extends FieldValues>({
  name,
  label,
  control,
  icon: Icon,
  options,
  placeholder,
}: SelectFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={name}
        value={label}
      />
      <div className="">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Select
              id={name}
              icon={Icon}
              {...field}
              value={field.value}
              helperText={error?.message}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
};
