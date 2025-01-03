import React, { useEffect, useState } from "react";
import { Spinner, Table } from "flowbite-react";
import { Heading } from "../../components/Typography";
import * as AdoptionService from "../../services/adoption.service";
import { useAuthStore } from "../../store/Auth.store";
import { AdoptionApplicationResponse } from "../../types/Adoption.types";

export const AplicationSection: React.FC = () => {
  const { channel, credential, isAuthenticated } = useAuthStore((state) => state);
  const [applications, setApplications] = useState<AdoptionApplicationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (isAuthenticated) {
      const getData = async () => {
        const { data } = await AdoptionService.findAllByUser(channel, credential!);
        if (data) {
          setApplications(data);
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
      <div className="overflow-x-auto">
        <Table>
          <Table.Head className="text-center">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Mascota</Table.HeadCell>
            <Table.HeadCell>Tipo</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-center">
            {applications.map((app) => (
              <Table.Row
                key={app.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{app.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {app.petName}
                </Table.Cell>
                <Table.Cell>{app.petCategory}</Table.Cell>
                <Table.Cell>
                  {" "}
                  <div className={`p-2 w-full text-white rounded-md bg-royal-purple`}>
                    {app.status}
                  </div>
                </Table.Cell>
                <Table.Cell>{new Date(app.createdAt).toLocaleString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
