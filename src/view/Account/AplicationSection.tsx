import React from "react";
import { Table } from "flowbite-react";
import { Heading } from "../../components/Typography";

export const AplicationSection: React.FC = () => {
  const applications = [
    { id: 1, petName: "Max", status: "Pendiente", date: "2023-05-15" },
    { id: 2, petName: "Luna", status: "Aprobada", date: "2023-05-10" },
    { id: 3, petName: "Rocky", status: "Rechazada", date: "2023-05-05" },
  ];

  return (
    <div className="h-full">
      <Heading
        level="3"
        color="royal-purple"
        className="font-bold mb-4"
      >
        My adoption applications
      </Heading>
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Nombre de la Mascota</Table.HeadCell>
          <Table.HeadCell>Estado</Table.HeadCell>
          <Table.HeadCell>Fecha</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {applications.map((app) => (
            <Table.Row
              key={app.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{app.id}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {app.petName}
              </Table.Cell>
              <Table.Cell>{app.status}</Table.Cell>
              <Table.Cell>{app.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
