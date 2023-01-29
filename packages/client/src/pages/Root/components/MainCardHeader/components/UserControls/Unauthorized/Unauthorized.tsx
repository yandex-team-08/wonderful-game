import { Button, Tooltip, Switch } from '@mui/material';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from '../../../../../../../utils/routes';

const Unauthorized: FC = () => {
  const navigate = useNavigate();

  const handleSignupClick = useCallback(() => {
    navigate(RoutePaths.signup);
  }, []);

  const handleLoginClick = useCallback(() => {
    navigate(RoutePaths.login);
  }, []);

  return (
    <>
      <Tooltip title="Переключатель темной темы">
        <Switch />
      </Tooltip>
      <Button onClick={handleSignupClick} color="secondary" variant="outlined" sx={{ color: 'white' }}>
        Зарегистрироваться
      </Button>
      <Button onClick={handleLoginClick} color="secondary" variant="contained" sx={{ ml: 1, color: 'white' }}>
        Войти
      </Button>
    </>
  );
};

export default Unauthorized;
