import React from "react";
import { SubTitle, Paragraph } from "../../components/Typography";
import { DonateCard } from "../../components/Card";

export const DonateSection: React.FC = () => {
  return (
    <section className="py-6 md:py-20 flex flex-col items-center justify-center gap-6 md:gap-8">
      <SubTitle className="text-justify md:text-left">Donate and Save Lives</SubTitle>
      <Paragraph className="text-center max-w-3xl">
        Your donation can make a life-saving difference. Join us in our mission to rescue, care for,
        and rehome pets in need rescue, care for, and rehome pets in need by contributing today.
      </Paragraph>

      <div className="grid md:grid-cols-3 gap-4 md:mt-20">
        <DonateCard
          title="One-Time Donation"
          description="Make a single donation to support our ongoing efforts in rescuing and caring for pets in need."
          icon="oneTime"
        />

        <DonateCard
          title="Monthly Pledge"
          description="Become a monthly donor and provide consistent support to help us save more lives every month."
          icon="monthly"
          variant="dark"
          className="md:translate-y-[-30px]"
        />

        <DonateCard
          title="Sponsor a Pet"
          description="Sponsor a pet in our care and directly contribute to their needs until they find their forever home."
          icon="sponsor"
        />
      </div>
      <img
        src="./src/assets/dog-icon.png"
        alt="dog-icon"
        className="mt-16"
      />
    </section>
  );
};
