import { Grid, Typography, Button, styled } from '@mui/joy';
import hero from '../assets/hero.svg';
import { Link } from 'react-router-dom';

const HeroText = styled(Typography)({
  color: '#592C27',
  fontFamily: 'Borel',
  fontSize: '80px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '100px',
});
const HeroSubText = styled(Typography)({
  color: '#A68B6D',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '30px',
  marginTop: -10,
  marginBottom: 20,
});
const HeroButton = styled(Button)({
  backgroundColor: '#592C27',
  '&:hover': {
    backgroundColor: '#8C3D36',
  },
});
const Home = () => {
  return (
    <Grid sx={{ maxWidth: '100vw', minHeight: '100vh' }} container>
      <Grid
        sx={{
          bgcolor: '#fff',
          p: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
        md={6}
        item
      >
        <HeroText>Inline Crud Application</HeroText>
        <HeroSubText>
          An inline CRUD application is a user interface design that enables
          users to perform Create, Read, Update, and Delete operations on data
          directly within the same interface, without needing to navigate to
          separate pages. It provides a seamless user experience by allowing
          users to add, view, edit, and remove data entries within a single
          context, often seen in web applications for efficient data management
          and real-time interactions.
        </HeroSubText>
        <HeroButton component={Link} to="users">
          go to dashboard
        </HeroButton>
      </Grid>
      <Grid alignSelf={'center'} md={6} item>
        <img src={hero} style={{ height: '45vmax' }} />
      </Grid>
    </Grid>
  );
};

export default Home;
