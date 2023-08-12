import { Outlet } from 'react-router-dom';
import { Container } from '@mui/joy';

const Layout = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Outlet />
    </Container>
  );
};

export default Layout;
