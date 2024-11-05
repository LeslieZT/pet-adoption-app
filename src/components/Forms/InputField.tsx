/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput, Label } from "flowbite-react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: IconType;
  className?: string;
  [key: string]: any;
}

export const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  className = "",
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className={className}>
      <div className="mb-2 block">
        <Label
          htmlFor={name}
          value={label}
          className="text-slate-gray"
        />
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            icon={Icon}
            helperText={error?.message}
            color={error ? "failure" : "gray"}
            {...props}
          />
        )}
      />
    </div>
  );
};
