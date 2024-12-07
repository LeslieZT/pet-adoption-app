import { Label, Select } from "flowbite-react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  icon?: IconType; // Hacer el icono opcional
  options: { value: string | number | Record<string, unknown>; label: string }[];
  placeholder: string;
  disabled?: boolean;
}

export const SelectField = <T extends FieldValues>({
  name,
  label,
  control,
  icon: Icon,
  options = [],
  placeholder,
  disabled = false,
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
              disabled={disabled}
              id={name}
              icon={Icon}
              {...field}
              value={field.value}
              helperText={error?.message}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option
                  key={option.label}
                  value={
                    typeof option.value === "object" ? JSON.stringify(option.value) : option.value
                  }
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
