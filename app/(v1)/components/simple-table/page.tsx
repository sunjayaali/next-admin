"use client";

import { SimpleTable, SortColumn } from "@simple-table/react";
import "@simple-table/react/styles.css";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "@wrksz/themes/client";
import { useState } from "react";

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortColumn | null>(null);

  const { data = [], isLoading } = useQuery<Todo[]>({
    queryKey: ["todos", page, sort],
    queryFn: async () => {
      const url = new URL("https://jsonplaceholder.typicode.com/todos");
      url.searchParams.set("_page", page.toString());

      if (sort) {
        url.searchParams.set(
          "_sort",
          sort.direction === "asc"
            ? sort.key.accessor
            : `-${sort.key.accessor}`,
        );
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch todos");
      return res.json();
    },
  });

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">Simple Table</h2>
          <p>A simple table component with basic features.</p>
          <SimpleTable
            defaultHeaders={[
              {
                accessor: "id",
                label: "ID",
                width: "auto",
                align: "right",

                type: "number",
              },
              {
                accessor: "title",
                label: "Title",
                width: "auto",
                isSortable: true,
              },
              {
                accessor: "completed",
                label: "Completed",
                width: "auto",
                cellRenderer: (props) => {
                  return props.value ? "✅" : "❌";
                },
              },
              {
                accessor: "",
                label: "Actions",
                width: "auto",
                cellRenderer: (props) => {
                  return (
                    <div className="gap-2">
                      <button
                        className="btn btn-xs"
                        onClick={(e) => {
                          alert(JSON.stringify(props.row, null, 2));
                        }}
                      >
                        Alert
                      </button>
                    </div>
                  );
                },
              },
            ]}
            rows={data}
            autoExpandColumns
            serverSidePagination
            columnResizing
            shouldPaginate
            rowsPerPage={10}
            totalRowCount={100}
            onPageChange={(page) => {
              setPage(page);
            }}
            isLoading={isLoading}
            onSortChange={(sort) => {
              setSort(sort);
            }}
            externalSortHandling
            theme={resolvedTheme === "dark" ? "modern-dark" : "modern-light"}
          />
        </div>
      </div>
    </>
  );
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
