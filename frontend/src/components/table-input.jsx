/* eslint-disable react/prop-types */
import { Input, styled } from '@mui/joy';
import { useSubmit } from 'react-router-dom';

const TableStyledInput = styled(Input)({
  border: 'none',
  paddingLeft: 0,
  '& input': {
    cursor: 'pointer',
  },
  '&.Mui-focused input': {
    cursor: 'initial',
  },
});

const TableInput = ({ value, ...rest }) => {
  const submit = useSubmit();

  return (
    <>
      <TableStyledInput
        {...rest}
        defaultValue={value}
        onBlur={(e) => {
          // display key value ----> console.log(e.target.name, e.target.value);
          // Display the keys

          const formData = new FormData();
          formData.append(e.target.name, e.target.value);
          submit(formData, {
            method: 'post',
            action: `${rest.id}/edit`,
          });
        }}
      />
    </>
  );
};

export default TableInput;
