import { Box, Button, Sheet, Stack, Table } from '@mui/joy';
import { useLoaderData, Form, useRevalidator } from 'react-router-dom';
import axios from 'axios';
import CustomAvatar from '../components/custom-avatar';
import TableInput from '../components/table-input';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import DeleteCell from '../components/delete-cell';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor(
    (row) => row.attributes.profile?.data?.attributes?.url,
    {
      id: 'profile',
      header: 'Profile Picture',
      size: 80,
      cell: ({ row, column, getValue }) => (
        <CustomAvatar
          id={row.original.id}
          key={getValue()}
          name={column.id}
          src={`${axios.defaults.baseURL}${getValue()}`}
        />
      ),
    }
  ),
  columnHelper.accessor((row) => row.attributes.fname, {
    id: 'fname',
    header: 'First Name',
    cell: ({ row, column, getValue }) => (
      <TableInput
        key={getValue()}
        id={row.original.id}
        name={column.id}
        value={getValue()}
      />
    ),
  }),
  columnHelper.accessor((row) => row.attributes.lname, {
    id: 'lname',
    header: 'Last Name',
    cell: ({ row, column, getValue }) => (
      <TableInput
        key={getValue()}
        id={row.original.id}
        name={column.id}
        value={getValue()}
      />
    ),
  }),
  columnHelper.accessor((row) => row.attributes.email, {
    id: 'email',
    header: 'E-mail Address',
    cell: ({ row, column, getValue }) => (
      <TableInput
        key={getValue()}
        id={row.original.id}
        name={column.id}
        value={getValue()}
      />
    ),
  }),
  columnHelper.accessor((row) => row.attributes.phone, {
    id: 'phone',
    header: 'Phone Number',
    cell: ({ row, column, getValue }) => (
      <TableInput
        key={getValue()}
        id={row.original.id}
        name={column.id}
        value={getValue()}
      />
    ),
  }),
  columnHelper.accessor((row) => row.id, {
    id: 'id',
    header: 'Action',
    size: 80,
    cell: (props) => <DeleteCell {...props} />,
  }),
];

const Students = () => {
  const data = useLoaderData();
  const revalidator = useRevalidator();
  console.log(data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box component={Stack} spacing={2} sx={{ p: 4 }}>
      <Form method="post">
        <Stack direction={'row'} spacing={1}>
          <Button type="submit" color="warning">
            Create New Student
          </Button>
          <Button
            variant="soft"
            onClick={async () => {
              let promises = data
                .filter((entry) => {
                  const attributes = entry.attributes;
                  return (
                    attributes.fname === null &&
                    attributes.lname === null &&
                    attributes.email === null &&
                    attributes.phone === null
                  );
                })
                .map((entry) => entry.id);
              promises = promises.map((id) =>
                axios.delete(`/api/students/${id}`)
              );
              await Promise.all(promises);
              revalidator.revalidate();
            }}
          >
            Clear All Empty Entries
          </Button>
        </Stack>
      </Form>
      <Sheet sx={{ borderRadius: 10 }}>
        <Table borderAxis="both" size="lg">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  console.log(header);
                  return (
                    <th style={{ width: header.getSize() }} key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
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

            {/* <tr>
              <td>
                <CustomAvatar src="https://i.pravatar.cc/300" />
              </td>
              <td>
                <TableInput defaultValue={'Subroto'} />
              </td>
              <td>
                <TableInput defaultValue={'Biswas'} />
              </td>
              <td>
                <TableInput defaultValue={'example@test.com'} />
              </td>
              <td>
                <TableInput defaultValue={'+91 111-1111-111'} />
              </td>
              <td>
                <Button color="danger">delete</Button>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};

export default Students;
