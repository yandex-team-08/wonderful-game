import { Card } from '@mui/material';
import { FC, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import MainCardHeader from './components/MainCardHeader';
import styles from './Root.module.scss';

import PageWrapper from '../../components/PageWrapper';
import { RuntimeError } from '../../components/RuntimeError/RuntimeError';

const Root: FC = () => {
  const [pageName, setPageName] = useState('');

    //логика для тестирования ErrorBoundary
  // let [count, setCount] = useState({user: '', name: ''});

  // function errorLog(){
  //   setCount(count = {user: null})
  // }
  //добавить к детям тестируемого блока
  //<Button type="button" onClick={errorLog}>
          //{count}
  // </Button>

  return (
    <ErrorBoundary FallbackComponent={RuntimeError} >
    <PageWrapper>
      <Card variant="outlined" className={styles.wrapper}>
        <MainCardHeader pageName={pageName} />
        <Outlet context={{ setPageName }} />
      </Card>
    </PageWrapper>
    </ErrorBoundary>
  );
};

export default Root;
