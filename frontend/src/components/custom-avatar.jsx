/* eslint-disable react/prop-types */
import { Avatar } from '@mui/joy';
import { useSubmit } from 'react-router-dom';

const CustomAvatar = (props) => {
  const submit = useSubmit();
  return (
    <>
      <Avatar
        sx={{ cursor: 'pointer' }}
        htmlFor="profile"
        component="label"
        {...props}
      />
      <input
        type="file"
        name="profile"
        id="profile"
        hidden
        onChange={(e) => {
          if (e.target.files[0]) {
            const formData = new FormData();
            formData.append(e.target.name, e.target.files[0]);
            submit(formData, {
              method: 'post',
              action: `${props.id}/edit`,
              encType: 'multipart/form-data',
            });
          }
        }}
      />
    </>
  );
};

export default CustomAvatar;
