import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiEdit2Fill } from "react-icons/ri";
import { ToggleSwitchField } from "../../components/Forms";
import {
  AdoptionApplicationFormData,
  AdoptionApplicationSchema,
} from "../../schema/AdoptionAplications";
import { CustomButton } from "../../components/Buttons";
import { AdoptApplicationQuestions } from "../../constants/questions";
import { TextareaField } from "../../components/Forms/TextareaField";
import { RadioButtonField } from "../../components/Forms/RadioButtonField";
import { Heading } from "../../components/Typography";
import { useAuthStore } from "../../store/Auth.store";
import * as AdoptionService from "../../services/adoption.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatRefCode } from "../../utils/formatFields";

interface AdoptionFormProps {
  petId: number;
  className?: string;
}

export const AdoptionForm: React.FC<AdoptionFormProps> = ({ petId, className }) => {
  const { channel, credential } = useAuthStore((state) => state);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm<AdoptionApplicationFormData>({
    resolver: zodResolver(AdoptionApplicationSchema),
    defaultValues: {
      housingType: "Casa con patio",
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

  const onSubmit = async (data: AdoptionApplicationFormData) => {
    try {
      await AdoptionService.create(
        { application: data, petId },
        channel,
        credential!,
      );
      reset();
      navigate(`/adopt/${formatRefCode(petId)}/application-form/success`);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className={className}>
      <Heading
        level="5"
        color="royal-purple"
        className="font-medium flex items-center gap-2 mb-6"
      >
        <RiEdit2Fill className="h-7 w-7 text-royal-purple" />
        Formulario de solicitud de adopción
      </Heading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <RadioButtonField
          name="housingType"
          control={control}
          question="¿Qué tipo de vivienda tienes?"
          options={[
            { id: "1", value: "Casa con patio", label: "Casa con patio" },
            {
              id: "2",
              value: "Apartamento con acceso al exterior",
              label: "Apartamento con acceso al exterior",
            },
            {
              id: "3",
              value: "Casa o apartamento sin acceso al exterior",
              label: "Casa o apartamento sin acceso al exterior",
            },
            { id: "4", value: "Granja o propiedad rural", label: "Granja o propiedad rural" },
          ]}
        />

        {AdoptApplicationQuestions.map((question) => (
          <ToggleSwitchField
            key={question.id}
            control={control}
            name={question.code as any}
            question={question.question}
          />
        ))}

        <TextareaField
          name="adoptionReason"
          control={control}
          label="¿Por qué quieres adoptar a esta mascota?"
          placeholder="Razón para adoptar"
          className="w-full"
        />
        <TextareaField
          name="situationChange"
          control={control}
          label="¿Qué harías si tu situación personal cambia y ya no puedes cuidar a la mascota?"
          placeholder="Cambio de situación"
          className="w-full"
        />
        {error && <span className="text-red-500 text-sm text-center">{error}</span>}
        <CustomButton
          type="submit"
          color="royal-purple"
        >
          Enviar
        </CustomButton>
      </form>
    </div>
  );
};
