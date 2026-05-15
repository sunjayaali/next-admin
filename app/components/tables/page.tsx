"use client";

import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Modal,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { EditIcon } from "lucide-react";
import { DataTable } from "mantine-datatable";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

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

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    validate: {},
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const user = form.getValues();
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );
      return res.json();
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="User details" centered>
        <Box pos="relative">
          <LoadingOverlay visible={isPending} />

          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <SimpleGrid>
              <TextInput label="Name" {...form.getInputProps("name")} />
              <TextInput label="Username" {...form.getInputProps("username")} />
              <TextInput
                label="Email"
                type="email"
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Address"
                {...form.getInputProps("address.street")}
              />
              <TextInput
                label="Suite"
                {...form.getInputProps("address.suite")}
              />
              <TextInput label="City" {...form.getInputProps("address.city")} />
              <TextInput
                label="Zipcode"
                {...form.getInputProps("address.zipcode")}
              />
              <TextInput
                label="Latitude"
                {...form.getInputProps("address.geo.lat")}
              />
              <TextInput
                label="Longitude"
                {...form.getInputProps("address.geo.lng")}
              />
              <TextInput label="Phone" {...form.getInputProps("phone")} />
              <TextInput label="Website" {...form.getInputProps("website")} />
              <TextInput
                label="Company Name"
                {...form.getInputProps("company.name")}
              />
              <TextInput
                label="Company Catch Phrase"
                {...form.getInputProps("company.catchPhrase")}
              />
              <TextInput
                label="Company BS"
                {...form.getInputProps("company.bs")}
              />

              <Group justify="right">
                <Button variant="outline" onClick={() => form.reset()}>
                  Reset
                </Button>
                <Button
                  onClick={() => {
                    modals.openConfirmModal({
                      title: "Are you sure?",
                      children: (
                        <Text>Do you really want to save the changes?</Text>
                      ),
                      labels: { confirm: "Yes", cancel: "No" },

                      onConfirm: () => {
                        mutate();
                      },
                    });
                  }}
                >
                  Save
                </Button>
              </Group>
            </SimpleGrid>
          </form>
        </Box>
      </Modal>

      <SimpleGrid>
        <DataTable<User>
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
              width: "0%",
              render: (row) => {
                return (
                  <Group>
                    <Button
                      size="xs"
                      variant="transparent"
                      onClick={() => {
                        open();
                        form.setValues(row);
                      }}
                    >
                      <EditIcon size={16} />
                    </Button>
                  </Group>
                );
              },
            },
          ]}
          records={data?.users}
          pinLastColumn
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

        <Table<User>
          scroll={{ x: "max-content" }}
          rowKey={(user) => user.id}
          loading={isFetching}
          pagination={{
            total: data?.totalRecords,
            pageSizeOptions: [5, 10],
            current: page,
            showSizeChanger: true,
            onChange: (p, r) => {
              setPage(p);
              setRecordsPerPage(r);
            },
          }}
          dataSource={data?.users}
          columns={[
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Username", dataIndex: "username", key: "username" },
            { title: "Email", dataIndex: "email", key: "email" },
            { title: "Phone", dataIndex: "phone", key: "phone" },
            { title: "Website", dataIndex: "website", key: "website" },
          ]}
        />
      </SimpleGrid>
    </>
  );
}
