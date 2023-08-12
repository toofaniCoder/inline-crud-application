import { Input, styled } from '@mui/joy';

const TableInput = styled(Input)({
  border: 'none',
  '& input': {
    cursor: 'pointer',
  },
  '&.Mui-focused input': {
    cursor: 'initial',
  },
});

export default TableInput;
