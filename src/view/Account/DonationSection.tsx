import React, { useEffect, useState } from "react";
import { Spinner, Table } from "flowbite-react";
import { Heading } from "../../components/Typography";
import { useAuthStore } from "../../store/Auth.store";
import * as DonationService from "../../services/donation.service";
import { DonationUserResponse } from "../../types/Donation.types";

export const DonationUserSection: React.FC = () => {
  const { channel, credential, isAuthenticated } = useAuthStore((state) => state);
  const [Donations, setDonations] = useState<DonationUserResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (isAuthenticated) {
      const getData = async () => {
        const { data } = await DonationService.findAllByUser(channel, credential!);
        if (data) {
          setDonations(data);
        }
        setIsLoading(false);
      };
      getData();
    }
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

  return (
    <div className="h-full">
      <Heading
        level="3"
        color="royal-purple"
        className="font-bold mb-4"
      >
        Mis aplicaciones de adoptación
      </Heading>
      <div className="overflow-x-auto text-center">
        <Table>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Plan</Table.HeadCell>
            <Table.HeadCell>Monto</Table.HeadCell>
            <Table.HeadCell>Tipo</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-center">
            {Donations.map((donation) => (
              <Table.Row
                key={donation.donationId}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{donation.donationId}</Table.Cell>
                <Table.Cell>{donation.plan.name}</Table.Cell>
                <Table.Cell>S/. {donation.plan.price}.00</Table.Cell>
                <Table.Cell className="text-center">
                  <div
                    className={`p-2 w-full text-white rounded-md ${donation.type === "payment" ? "bg-royal-purple" : "bg-lavender-purple"}`}
                  >
                    <p>{donation.type === "payment" ? "Pago" : "Suscripción"}</p>
                  </div>
                </Table.Cell>
                <Table.Cell>{donation.status}</Table.Cell>
                <Table.Cell>{new Date(donation.createdAt).toLocaleString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
