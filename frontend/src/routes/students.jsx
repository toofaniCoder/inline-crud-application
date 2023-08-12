import { Avatar, Box, Button, Sheet, Table } from '@mui/joy';

const Students = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Sheet sx={{ borderRadius: 10 }}>
        <Table borderAxis="both" size="lg">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail Address</th>
              <th>Phone Number</th>
              <th style={{ width: '10%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Avatar src="https://i.pravatar.cc/300" />
              </td>
              <td>Subroto</td>
              <td>Biswas</td>
              <td>example@test.com</td>
              <td>+91 111-1111-111</td>
              <td>
                <Button color="danger">delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};

export default Students;
