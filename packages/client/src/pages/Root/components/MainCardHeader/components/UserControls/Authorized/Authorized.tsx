import { Button, IconButton, Typography } from '@mui/material';
import AvatarComponent from '@src/components/AvatarComponent';
import { useAppSelector } from '@src/hooks/useAppSelector';
import { useAuth } from '@src/hooks/useAuth';
import { selectUserInfo } from '@src/store/selectors';
import { FC, useMemo } from 'react';

const Authorized: FC = () => {
  const userInfo = useAppSelector(selectUserInfo);
  const { logout } = useAuth();
  const { first_name, second_name, display_name } = userInfo ?? {};

  const nameString = useMemo(
    () => (!display_name ? `${first_name} ${second_name}` : display_name),
    [first_name, second_name, display_name]
  );

  return (
    <>
      <Typography component="div" sx={{ mr: 1 }} color="inherit">
        {nameString}
      </Typography>
      <Button variant="outlined" sx={{ color: 'white' }} onClick={logout}>
        Выйти
      </Button>
      <IconButton sx={{ p: 0 }}>
        <AvatarComponent />
      </IconButton>
    </>
  );
};

export default Authorized;
