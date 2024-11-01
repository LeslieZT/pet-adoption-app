import { useState } from "react";
import { TextInput, Label } from "flowbite-react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import { HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";

interface PasswordFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

export const PasswordField = <T extends FieldValues>({
  name,
  control,
  label,
}: PasswordFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
          <div className="relative">
            <TextInput
              id={name}
              type={showPassword ? "text" : "password"}
              icon={HiLockClosed}
              {...field}
              helperText={error?.message}
              color={error ? "failure" : "gray"}
            />
            <button
              type="button"
              className={`absolute flex items-center right-4 ${error ? "bottom-[38px]" : "inset-y-0"}`}
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <HiEyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <HiEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        )}
      />
    </div>
  );
};
