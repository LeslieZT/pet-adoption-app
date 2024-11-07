/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textarea, Label } from "flowbite-react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  className?: string;
  [key: string]: any;
}

export const TextareaField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  className = "",
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className={className}>
      <div className="mb-2 block">
        <Label
          htmlFor={name}
          value={label}
          className="text-slate-gray text-sm md:text-base font-medium"
        />
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Textarea
            {...field}
            id={name}
            placeholder={placeholder}
            helperText={error?.message}
            color={error ? "failure" : "gray"}
            {...props}
            rows={4}
            className="p-4"
          />
        )}
      />
    </div>
  );
};
