import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Label, Radio } from "flowbite-react";

interface RadioButtonFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  question: string;
  options: { id: string; value: string; label: string; disabled?: boolean }[];
}

export function RadioButtonField<T extends FieldValues>({
  name,
  control,
  question,
  options,
}: RadioButtonFieldProps<T>) {
  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="mb-4">{question}</legend>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex justify-between gap-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center gap-3">     
                <Radio
                  id={option.id}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  disabled={option.disabled}
                  onChange={() => field.onChange(option.value)}
                />
                <Label htmlFor={option.id} disabled={option.disabled} className="text-slate-gray">
                  {option.label}
                </Label>
                
              </div>
            ))}
          </div>
        )}
      />
    </fieldset>
  );
}
