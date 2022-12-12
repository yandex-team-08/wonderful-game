import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../Errors.module.scss';

const Error500: FC = () => {

  const navigate = useNavigate();

  const onLogin = () => { navigate('/login'); };

  return <div className={styles.wrapper} >
    <h1 className={styles.h1}>500</h1>
    <span className={styles.span}>Уже фиксим</span>
    <a onClick={onLogin} className={styles.a}>назад в игру</a>
  </div>;
};

export default Error500;
