"use client";

import { useForm } from "@tanstack/react-form";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

const columnHelper = createColumnHelper<Todo>();

export default function SimpleTable() {
  const [tableData, setTableData] = useState<Todo[]>(data);

  const ref = useRef<HTMLDialogElement>(null);
  const ref2 = useRef<HTMLDialogElement>(null);
  const successRef = useRef<HTMLDialogElement>(null);

  const form = useForm({
    defaultValues: {
      userId: 0,
      id: 0,
      title: "",
      completed: false,
    },
    onSubmit: async ({ value }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${value.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        },
      );

      setTableData((prev) => {
        const newData = prev.map((item) => {
          if (item.id === value.id) {
            return value;
          }
          return item;
        });
        return newData;
      });
      successRef.current?.showModal();
    },
  });

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("title", {
      header: "Title",
    }),
    columnHelper.accessor("completed", {
      header: "Completed",
    }),
    columnHelper.display({
      id: "actions",
      cell: (props) => {
        return (
          <button
            className="btn btn-xs btn-neutral btn-outline"
            onClick={() => {
              form.reset(props.row.original);

              ref.current!.showModal();
            }}
          >
            Edit
          </button>
        );
      },
    }),
  ];
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="h-64 overflow-auto">
        <table className="table table-sm table-pin-rows table-zebra">
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

      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              ref2.current!.showModal();
            }}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Title</legend>
              <form.Field name="title">
                {(field) => (
                  <input
                    className="input w-full"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </fieldset>

            <div className="modal-action">
              <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                  <button
                    type="submit"
                    className="btn btn-neutral"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Save
                  </button>
                )}
              </form.Subscribe>
              {/* <button
                type="submit"
                className="btn btn-primary"
                disabled={form.state.isSubmitting}
              >
                {form.state.isSubmitting && <span className="">adasd</span>}
                Save
              </button> */}
            </div>
          </form>
        </div>
        {/* <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form> */}
      </dialog>

      <dialog ref={ref2} className="modal modal-lg">
        <div className="modal-box w-11/12 max-w-sm">
          <h1 className="font-bold text-lg">Confirm Update</h1>

          <p className="py-4">Are you sure you want to save changes?</p>

          <div className="modal-action">
            <button
              className="btn btn-neutral"
              onClick={() => {
                form.handleSubmit();
                ref2.current?.close();
              }}
            >
              Yes
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => ref2.current?.close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      <dialog ref={successRef} className="modal">
        <div className="modal-box text-center max-w-sm">
          <h3 className="font-bold text-lg">Success!</h3>

          <p className="py-4">Data updated successfully</p>

          <div className="modal-action justify-center">
            <button
              className="btn btn-neutral"
              onClick={() => successRef.current?.close()}
            >
              OK
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
