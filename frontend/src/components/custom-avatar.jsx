/* eslint-disable react/prop-types */
import { Avatar, Skeleton } from '@mui/joy';
import { useSubmit, useNavigation } from 'react-router-dom';

const CustomAvatar = (props) => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const { src, id, name } = { ...props };
  return (
    <>
      <Avatar
        sx={{ cursor: 'pointer' }}
        src={
          parseInt(navigation.formAction?.match(/\d+/gi)) == id &&
          navigation.formData.has(name)
            ? ''
            : src
        }
      //  htmlFor="profile"
        htmlFor={id}
        component="label"
      >
        <Skeleton
          loading={
            navigation.state === 'submitting' &&
            parseInt(navigation.formAction?.match(/\d+/gi)) == id &&
            navigation.formData.has(name)
          }
          sx={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Avatar>
      <input
        type="file"
        name="profile"
      //  id="profile"
      id={id}  
        hidden
        onChange={(e) => {
          if (e.target.files[0]) {
            const formData = new FormData();
            formData.append(e.target.name, e.target.files[0]);
            submit(formData, {
              method: 'post',
              action: `${id}/edit`,
              encType: 'multipart/form-data',
            });
          }
        }}
      />
    </>
  );
};

export default CustomAvatar;
