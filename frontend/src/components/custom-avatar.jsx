import { Avatar } from '@mui/joy';

const CustomAvatar = (props) => {
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
        onChange={(e) => console.log(e.target.files[0])}
      />
    </>
  );
};

export default CustomAvatar;
