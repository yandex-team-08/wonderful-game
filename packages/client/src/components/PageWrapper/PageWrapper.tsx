import { FC, ReactNode } from 'react';

import styles from './PageWrapper.module.scss';

type TPageWrapperProps = { children: ReactNode };

const PageWrapper: FC<TPageWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper} data-testid="wrapper">{children}</div>;
};

export default PageWrapper;
