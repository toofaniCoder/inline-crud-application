import ReactDOM from 'react-dom/client';
import { CssVarsProvider, CssBaseline, GlobalStyles } from '@mui/joy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// axios setup
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1337';

// import pages
import Layout from './routes/layout';
import Home from './routes/home';

// import fonts
import '@fontsource/poppins';
import Students from './routes/students';

// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'students',
        element: <Students />,
        loader: async () => {
          const { data } = await axios.get(
            '/api/students?populate=*&sort=createdAt:desc'
          );
          return data.data;
        },
        action: async () => {
          await axios.post('/api/students', { data: {} });
          return null;
        },
      },
      {
        path: 'students/:id/delete',
        action: async ({ params }) => {
          await axios.delete(`/api/students/${params.id}`);
          return null;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <CssBaseline />
    <GlobalStyles styles={{ body: { backgroundColor: '#F1D7B6' } }} />
    <RouterProvider router={router} />
  </CssVarsProvider>
);
