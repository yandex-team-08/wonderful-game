import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../Errors.module.scss';

const Error404: FC = () => {

  const navigate = useNavigate();

  const onLogin = () => { navigate('/login'); };

  return <div className={styles.wrapper} >
    <h1 className={styles.h1}>404</h1>
    <span className={styles.span}>Не туда попали...</span>
    <a onClick={onLogin} className={styles.a}>назад в игру</a>
  </div>;
};

export default Error404;
