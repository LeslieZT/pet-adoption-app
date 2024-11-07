import { ToggleSwitch } from "flowbite-react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface ToggleSwitchFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  question: string;
}

export const ToggleSwitchField = <T extends FieldValues>({
  name,
  question,
  control,
}: ToggleSwitchFieldProps<T>) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <span className="text-sm text-slate-gray font-medium">{question}</span>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ToggleSwitch
              {...field}
              id={name}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
};
