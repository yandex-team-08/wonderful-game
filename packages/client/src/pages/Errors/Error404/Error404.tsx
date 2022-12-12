import { Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../Errors.module.scss';

const Error404: FC = () => {

  const navigate = useNavigate();

  const onLogin = () => { navigate('/login'); };

  return <div className={styles.wrapper} >
    <Typography variant="h1">404</Typography>
    <Typography variant="h2">Не туда попали...</Typography>
    <Typography variant="h5" className={styles.link} onClick={onLogin}>назад в игру</Typography>
  </div>;
};

export default Error404;
