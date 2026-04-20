"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

function TableSkeleton() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td>
                <div className="skeleton h-4 w-10"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-32"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-48"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-24"></div>
              </td>
              <td>
                <div className="skeleton h-4 w-28"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <TableSkeleton />;
  if (isError)
    return <div className="p-4 text-red-500">Error loading users</div>;

  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Reload"
          )}
        </button>
      </div>

      <UsersTable data={data ?? []} />
    </div>
  );
}

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
  }),
  columnHelper.accessor("website", {
    header: "Website",
  }),
];

function UsersTable({ data }: { data: User[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* Header */}
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Body */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
