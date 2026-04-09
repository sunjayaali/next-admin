"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};



export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingUserDetail, setLoadingUserDetail] = useState(false);

  // For dialog
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {};

    fetchUsers();
  }, []);

  const handleCardClick = (user: User) => {
    setOpen(true);
    fetchUserDetail(user.id);
  };

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }

  async function fetchUserDetail(id: number) {
    setLoadingUserDetail(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data: User = await res.json();
      setSelectedUser(data);
    } finally {
      setLoadingUserDetail(false);
    }
  }

  // Define table columns
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button size="sm" onClick={() => handleRowClick(row.original)}>
              View
            </Button>
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  async function handleRowClick(user: User) {
    setOpen(true);
    fetchUserDetail(user.id);
  }

  return (
    <div className="space-y-4">
      {/* Fetch Button */}
      <Button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </Button>
      {/* {loading && <p>Loading users...</p>} */}

      {/* DataTable */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 border text-left">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="cursor-pointer hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>

          {loadingUserDetail ? (
            <p>Loading details...</p>
          ) : selectedUser ? (
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Username:</strong> {selectedUser.username}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Website:</strong> {selectedUser.website}
              </p>
            </div>
          ) : (
            <p>No user selected</p>
          )}

          <div className="mt-4 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
