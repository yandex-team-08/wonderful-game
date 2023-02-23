import { Button } from '@mui/material';
import { RoutePaths } from '@src/utils/routes';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <Button
        onClick={handleSignupClick}
        color="secondary"
        variant="outlined"
        sx={{ color: 'white' }}>
        Зарегистрироваться
      </Button>
      <Button
        onClick={handleLoginClick}
        color="secondary"
        variant="contained"
        sx={{ ml: 1, color: 'white' }}>
        Войти
      </Button>
    </>
  );
};

export default Unauthorized;
