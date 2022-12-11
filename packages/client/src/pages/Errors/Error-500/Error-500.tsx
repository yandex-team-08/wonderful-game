import { FC } from 'react';

import BGMain from '../../../../public/BG-main.jpg';
import { ROUTE_PATHS } from '../../../utils/routes';
import styles from '../Error.module.scss';

const Error500: FC = () => {

  const style = { background:'url(../../' + BGMain + ')',backgroundSize: 'cover' };

  return <div className={styles.wrapper} style={style} >
    <h1 className={styles.h1}>500</h1>
    <span className={styles.span}>Уже фиксим</span>
    <a href={ROUTE_PATHS.login} className={styles.a}>назад в игру</a>
  </div>;
};

export default Error500;
