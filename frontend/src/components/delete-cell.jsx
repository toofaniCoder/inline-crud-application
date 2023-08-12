/* eslint-disable react/prop-types */
import { Button } from '@mui/joy';
import { useFetcher } from 'react-router-dom';

const DeleteCell = ({ getValue }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action={`${getValue()}/delete`}>
      <Button type="submit" color="danger">
        delete
      </Button>
    </fetcher.Form>
  );
};

export default DeleteCell;
