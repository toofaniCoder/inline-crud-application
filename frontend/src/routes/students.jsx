import { Box, Button, Sheet, Table } from '@mui/joy';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CustomAvatar from '../components/custom-avatar';
import TableInput from '../components/table-input';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor((row) => row.attributes.profile.data.attributes.url, {
    id: 'profile',
    header: 'Profile Picture',
    size: 80,
    cell: ({ getValue }) => (
      <CustomAvatar src={`${axios.defaults.baseURL}${getValue()}`} />
    ),
  }),
  columnHelper.accessor((row) => row.attributes.fname, {
    id: 'fname',
    header: 'First Name',
    cell: ({ getValue }) => <TableInput defaultValue={getValue()} />,
  }),
  columnHelper.accessor((row) => row.attributes.lname, {
    id: 'lname',
    header: 'Last Name',
    cell: ({ getValue }) => <TableInput defaultValue={getValue()} />,
  }),
  columnHelper.accessor((row) => row.attributes.email, {
    id: 'email',
    header: 'E-mail Address',
    cell: ({ getValue }) => <TableInput defaultValue={getValue()} />,
  }),
  columnHelper.accessor((row) => row.attributes.phone, {
    id: 'phone',
    header: 'Phone Number',
    cell: ({ getValue }) => <TableInput defaultValue={getValue()} />,
  }),
  columnHelper.accessor((row) => row.id, {
    id: 'id',
    header: 'Action',
    size: 80,
    cell: () => <Button color="danger">delete</Button>,
  }),
];

const Students = () => {
  const data = useLoaderData();
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box sx={{ p: 4 }}>
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
