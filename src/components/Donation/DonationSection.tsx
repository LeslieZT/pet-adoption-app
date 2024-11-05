import { useState } from "react";
import { DonationTierCard } from "../Card/DonationTierCard";
import { ToggleSwitch } from "flowbite-react";
import { CustomButton } from "../Buttons";
import { useForm } from "react-hook-form";
import { CustomDonationFormData, CustomDonationSchema } from "../../schema/CustomDonation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationTiers } from "../../constants/allowValues";
import { InputField } from "../Forms";

export const DonationSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CustomDonationFormData>({
    resolver: zodResolver(CustomDonationSchema),
    defaultValues: {
      amount: undefined,
    },
  });

  const onSubmit = (data: CustomDonationFormData) => {
    console.log("Login attempt with:", data);
  };

  return (
    <section className="py-10">
      <div>
        <div className="flex justify-center items-center gap-4 pb-8">
          <span
            className={`text-md ${!isMonthly ? "text-royal-purple font-bold" : "text-gray-500"}`}
          >
            One off
          </span>
          <ToggleSwitch
            checked={isMonthly}
            onChange={setIsMonthly}
          />
          <span
            className={`text-md ${isMonthly ? "text-royal-purple font-bold" : "text-gray-500"}`}
          >
            Monthly
          </span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {donationTiers.map((tier, index) => (
            <DonationTierCard
              key={index}
              title={tier.title}
              subTitle={tier.subtitle}
              description={tier.description}
              price={tier.amount}
              type={isMonthly ? "montly" : "oneTime"}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-around items-center mt-10 gap-10">
        <form
          className="flex justify-center items-center  gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            name="amount"
            control={control}
            label="Choose your own amount"
            type="number"
            min={0}
            placeholder={`$ ${isMonthly ? "per month" : ""}`}
            className="w-80"
          />

          <CustomButton
            className={errors.amount ? "mt-0" : "mt-8"}
            type="submit"
          >
            Donate
          </CustomButton>
        </form>

        <img
          src="./src/assets/icons.png"
          alt="donation-illustration"
        />
      </div>
    </section>
  );
};