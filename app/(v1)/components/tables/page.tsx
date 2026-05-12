"use client";

import {
  Button,
  Group,
  SimpleGrid,
  Table,
  TableData,
  Text,
} from "@mantine/core";
import { notifications, showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const { data, isFetching } = useQuery({
    queryKey: ["table-data", page, recordsPerPage],
    queryFn: async () => {
      const params = new URLSearchParams({
        _page: page.toString(),
        _limit: recordsPerPage.toString(),
      });
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?${params.toString()}`,
      );
      const totalRecords = parseInt(
        res.headers.get("x-total-count") || "0",
        10,
      );
      const users = await res.json();

      return {
        users,
        totalRecords,
      };
    },
  });

  const tableData: TableData = {
    caption: "Some elements from periodic table",
    head: ["Element position", "Atomic mass", "Symbol", "Element name"],
    body: [
      [6, 12.011, "C", "Carbon"],
      [7, 14.007, "N", "Nitrogen"],
      [39, 88.906, "Y", "Yttrium"],
      [56, 137.33, "Ba", "Barium"],
      [58, 140.12, "Ce", "Cerium"],
    ],
  };

  return (
    <SimpleGrid>
      <DataTable
        striped
        highlightOnHover
        // minHeight={150}
        withTableBorder
        withColumnBorders
        fetching={isFetching}
        columns={[
          {
            accessor: "id",
            title: "#",
            textAlign: "right",
          },
          { accessor: "name" },
          {
            accessor: "username",
          },
          { accessor: "email" },
          { accessor: "address.street" },
          { accessor: "address.suite" },
          { accessor: "address.city" },
          { accessor: "address.zipcode" },
          { accessor: "address.geo.lat" },
          { accessor: "address.geo.lng" },
          { accessor: "phone" },
          { accessor: "website" },
          { accessor: "company.name" },
          { accessor: "company.catchPhrase" },
          { accessor: "company.bs" },
          {
            accessor: "",
            render: (row) => {
              return (
                <Group>
                  <Button
                    size="xs"
                    onClick={() => {
                      notifications.show({
                        title: "Notification",
                        message: JSON.stringify(row),
                      });
                    }}
                  >
                    Alert
                  </Button>
                </Group>
              );
            },
          },
        ]}
        records={data?.users}
        page={page}
        totalRecords={data?.totalRecords}
        recordsPerPage={recordsPerPage}
        onPageChange={(p) => {
          setPage(p);
        }}
        recordsPerPageOptions={[2, 5, 10]}
        onRecordsPerPageChange={(r) => {
          setPage(1);
          setRecordsPerPage(r);
        }}
      />
    </SimpleGrid>
  );
}
