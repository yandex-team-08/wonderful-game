import styles from './ErrorBoundary.module.scss';

import { ErrorType } from '../../../types/errorType';

export function ErrorFallback({ error,resetErrorBoundary }: ErrorType) {

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Что-то пошло не так</p>
      <div className={styles.message}>{error.message}</div>
      <button className={styles.button} onClick={resetErrorBoundary} >Обновить</button>
    </div>
  );

}

;
