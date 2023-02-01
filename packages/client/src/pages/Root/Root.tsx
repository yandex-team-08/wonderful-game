import { Card } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Context } from '@src/themes/themeContext';
import { lightTheme, darkTheme } from '@src/themes/themeValue';
import { FC, useState } from 'react';
import { Outlet } from 'react-router';

import MainCardHeader from './components/MainCardHeader';
import styles from './Root.module.scss';

import PageWrapper from '../../components/PageWrapper';
import { withAccessRights } from '../../HOCs';

const Root: FC = () => {
  const [pageName, setPageName] = useState('');
  const themeColor = `${window?.localStorage?.getItem('theme')}`;

  const [theme, setTheme] = useState(themeColor === 'light' ? lightTheme : darkTheme);

  return (
    <>
      <Context.Provider value={[theme, setTheme]}>
        <ThemeProvider theme={theme}>

          <CssBaseline />
          <PageWrapper>
            <Card variant="outlined" className={styles.wrapper}>
              <MainCardHeader pageName={pageName} />
              <Outlet context={{ setPageName }} />
            </Card>
          </PageWrapper>
        </ThemeProvider>
      </Context.Provider>
    </>
  );
};

export default withAccessRights(Root);
