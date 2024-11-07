import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToggleSwitchField } from "../../components/Forms";
import {
  AdoptionApplicationFormData,
  AdoptionApplicationSchema,
} from "../../schema/AdoptionAplications";
import { CustomButton } from "../../components/Buttons";
import { AdoptApplicationQuestions } from "../../constants/questions";
import { TextareaField } from "../../components/Forms/TextareaField";
import { RadioButtonField } from "../../components/Forms/RadioButtonField";

interface AdoptionFormProps {
  petId: string;
}

export const AdoptionForm: React.FC<AdoptionFormProps> = ({ petId }) => {
  console.log(petId);

  const { control, handleSubmit } = useForm<AdoptionApplicationFormData>({
    resolver: zodResolver(AdoptionApplicationSchema),
    defaultValues: {
      housingType: "House with Yard",
      isPlaceOwned: false,
      hasPermission: false,
      hasOutdoorSpace: false,
      hasPastExperience: false,
      canCoverCosts: false,
      canTakePetWalk: false,
      canTakeTimeOff: false,
      agreesToVisit: false,
      agreesToFollowUp: false,
      adoptionReason: "",
      situationChange: "",
    },
  });

  const onSubmit = (data: AdoptionApplicationFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <RadioButtonField
          name="housingType"
          control={control}
          question="What type of home do you live in?"
          options={[
            { id: "1", value: "House with Yard", label: "House with Yard" },
            { id: "2", value: "Apartment with Outdoor Access", label: "Apartment with Outdoor Access" },
            { id: "3", value: "House or Apartment without Outdoor Access", label: "House or Apartment without Outdoor Access" },
            { id: "4", value: "Farm or Rural Property", label: "Farm or Rural Property" },
          ]}
        />

        {AdoptApplicationQuestions.map((question) => (
          <ToggleSwitchField
            key={question.id}
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name={question.code as any}
            question={question.question}
          />
        ))}

        <TextareaField
          name="adoptionReason"
          control={control}
          label="Why do you want to adopt this pet?"
          placeholder="Adoption Reason"
          className="w-full"
        />
        <TextareaField
          name="situationChange"
          control={control}
          label="What would you do if your personal situation changes and you can no longer care for the pet?"
          placeholder="Situation Change"
          className="w-full"
        />
        <CustomButton
          type="submit"
          color="royal-purple"
        >
          Submit
        </CustomButton>
      </form>
    </div>
  );
};
