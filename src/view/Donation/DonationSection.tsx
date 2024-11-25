import { useEffect, useState } from "react";
import { Spinner, ToggleSwitch } from "flowbite-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomDonationFormData, CustomDonationSchema } from "../../schema/CustomDonation.schema";
import { InputField } from "../../components/Forms";
import { DonationTierCard } from "../../components/Card";
import { CustomButton } from "../../components/Buttons";
import { Plan } from "../../types/Plan.types";
import * as PlanService from "../../services/plan.service";
import * as DonationService from "../../services/donation.service";
import { MessageCard } from "../../components/Message/Message";
import { useAuthStore } from "../../store/Auth.store";
import { PaymentMode } from "../../types/Donation.types";

export const DonationSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donationTiers, setDonationTiers] = useState<Plan[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);

  const { user } = useAuthStore((state) => state);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CustomDonationFormData>({
    resolver: zodResolver(CustomDonationSchema),
    defaultValues: {
      amount: "" as unknown as number,
    },
  });

  const onSubmit = async (data: CustomDonationFormData) => {
    try {
      const response = await DonationService.makeCustomDonation({
        mode: isMonthly ? PaymentMode.SUBSCRIPTION : PaymentMode.ONE_TIME,
        amount: data.amount,
        idUser: user?.id,
        channel: user?.channel,
      });

      if (response?.data) {
        window.location.replace(response.data?.url);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await PlanService.getPlans();
        setDonationTiers(response.data as Plan[]);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {isLoading && (
          <Spinner
            color="purple"
            aria-label="Purple spinner example"
            className="h-52 w-52"
          />
        )}
      </div>
    );
  }

  if (error) {
    return (
      <MessageCard
        title="Something went wrong"
        message={error}
      />
    );
  }

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

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          {donationTiers.map((tier) => (
            <DonationTierCard
              key={tier.productId}
              productId={tier.productId}
              title={tier.name}
              subTitle={tier.title}
              description={tier.description}
              price={tier.price}
              type={isMonthly ? PaymentMode.SUBSCRIPTION : PaymentMode.ONE_TIME}
              isPopular={tier.isPolular}
              user={user}
            />
          ))}
        </div>
      </div>
      {!isMonthly && (
        <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-10">
          <form
            className="flex justify-center items-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              name="amount"
              control={control}
              label="Choose your own amount"
              type="number"
              min={1}
              step="1"
              placeholder={`$`}
              className="md:w-80"
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
            alt="donation-icons"
          />
        </div>
      )}
    </section>
  );
};
