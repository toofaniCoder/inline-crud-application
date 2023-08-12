/* eslint-disable react/prop-types */
import { Input, styled, AspectRatio, Skeleton } from '@mui/joy';
import { useSubmit, useNavigation } from 'react-router-dom';

const TableStyledInput = styled(Input)({
  border: 'none',
  borderRadius: 0,
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
  const navigation = useNavigation();

  return (
    <AspectRatio maxHeight={40}>
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
      <Skeleton
        maxHeight={40}
        loading={
          navigation.state === 'submitting' &&
          parseInt(navigation.formAction?.match(/\d+/gi)) == rest.id &&
          navigation.formData.has(rest.name)
        }
      />
    </AspectRatio>
  );
};

export default TableInput;
