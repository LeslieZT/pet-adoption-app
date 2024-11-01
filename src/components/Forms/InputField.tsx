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
}

export const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon: Icon,
}: InputFieldProps<T>) => {
  return (
    <div>
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
          />
        )}
      />
    </div>
  );
};
