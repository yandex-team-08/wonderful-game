import { Tooltip, Switch } from '@mui/material';
import { FC, useContext, useEffect } from 'react';

import { Context } from '../themeContext';
import { lightTheme, darkTheme } from '../themeValue';

const ThemeChecked: FC = () => {
    const [theme, setTheme] = useContext(Context);

    const toggleTheme = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme.palette.mode);
        console.log(theme.palette.mode);
    });

    return (
        <Tooltip title='Переключатель темной темы'>
            <Switch onClick={toggleTheme} checked={theme === lightTheme ? false : true} />
        </Tooltip>
    );
};

export default ThemeChecked;

