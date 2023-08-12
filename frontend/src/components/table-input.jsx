import { Input, styled } from '@mui/joy';

const TableInput = styled(Input)({
  border: 'none',
  paddingLeft: 0,
  '& input': {
    cursor: 'pointer',
  },
  '&.Mui-focused input': {
    cursor: 'initial',
  },
});

export default TableInput;
