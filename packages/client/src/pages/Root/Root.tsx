import { Card, Tooltip, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@src/themes';
import { FC, useState } from 'react';
import { Outlet } from 'react-router';

import MainCardHeader from './components/MainCardHeader';
import styles from './Root.module.scss';

import PageWrapper from '../../components/PageWrapper';
import { withAccessRights } from '../../HOCs';

const Root: FC = () => {
  const [pageName, setPageName] = useState('');

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    document.documentElement.dataset.theme = theme.palette.mode;
    localStorage.setItem('theme', theme.palette.mode);
  };

  const themeColor = `${window?.localStorage?.getItem('theme')}`;

  return (
    <>
      <ThemeProvider theme={themeColor === 'light' ? lightTheme : darkTheme}>

        <CssBaseline />
        <PageWrapper>
          <Card variant="outlined" className={styles.wrapper}>
            <MainCardHeader pageName={pageName} />
            <Outlet context={{ setPageName }} />
            <Tooltip title="Переключатель темной темы">
              <Switch onClick={toggleTheme} className={styles.toggle} checked={themeColor === 'light' ? false : true}/>
            </Tooltip>
          </Card>
        </PageWrapper>
      </ThemeProvider>
    </>
  );
};

export default withAccessRights(Root);
