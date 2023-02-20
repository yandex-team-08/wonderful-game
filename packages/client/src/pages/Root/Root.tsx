import { Card } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import PageWrapper from '@src/components/PageWrapper';
import RuntimeError from '@src/components/RuntimeError';
import { withAccessRights } from '@src/HOCs';
import { useAppDispatch } from '@src/hooks/useAppDispatch';
import { useAppSelector } from '@src/hooks/useAppSelector';
import { getUserTheme } from '@src/store/actions/theme';
import { selectUserInfo, selectTheme } from '@src/store/selectors';
import { lightTheme, darkTheme } from '@src/theme/ThemeValue';
import { FC, useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import MainCardHeader from './components/MainCardHeader';
import styles from './Root.module.scss';

const Root: FC = () => {
  const [pageName, setPageName] = useState('');
  const userInfo = useAppSelector(selectUserInfo);
  const themes = useAppSelector(selectTheme);
  const themeData = themes.isNightModeEnabled;
  const dispatch = useAppDispatch();

  const { id } = userInfo ?? {};

  useEffect(() => {
    dispatch(getUserTheme(id));
  }, []);

  return (
    <ErrorBoundary FallbackComponent={RuntimeError} >
      <ThemeProvider theme={themeData ? lightTheme : darkTheme}>
        <CssBaseline />

        <PageWrapper>
          <Card variant="outlined" className={styles.wrapper}>
            <MainCardHeader pageName={pageName} />
            <Outlet context={{ setPageName }} />
          </Card>
        </PageWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default withAccessRights(Root);
