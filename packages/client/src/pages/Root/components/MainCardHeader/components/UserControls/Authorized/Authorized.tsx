import { Button, IconButton, Typography } from '@mui/material';
import { FC, useMemo } from 'react';

import AvatarComponent from '../../../../../../../components/AvatarComponent';
import { useAuth } from '../../../../../../../hooks/useAuth';
import { usePageContext } from '../../../../../../../hooks/usePageContext';

const Authorized: FC = () => {
  const { userInfo } = usePageContext();
  const { logout } = useAuth();

  const { first_name, second_name, display_name } = userInfo || {};

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
        <AvatarComponent/>
      </IconButton>
    </>
  );
};

export default Authorized;
