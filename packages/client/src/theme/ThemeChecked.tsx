import { Switch, Tooltip } from '@mui/material';
import { useAppDispatch } from '@src/hooks/useAppDispatch';
import { useAppSelector } from '@src/hooks/useAppSelector';
import { getUserTheme, setUserTheme } from '@src/store/actions/theme';
import { selectUserInfo, selectTheme } from '@src/store/selectors';
import { FC, useEffect } from 'react';

const ThemeChecked: FC = () => {
    const userInfo = useAppSelector(selectUserInfo);
    const themes = useAppSelector(selectTheme);
    const themeData = themes.isNightModeEnabled;
    const dispatch = useAppDispatch();

    const { id } = userInfo ?? {};

    useEffect(() => {
        dispatch(getUserTheme(id));
    }, []);

    const toogleTheme = async () => {
        themeData ?
            dispatch(setUserTheme({ isNightModeEnabled: false })) :
            dispatch(setUserTheme({ isNightModeEnabled: true }));
    };

    return (
        <Tooltip title="Переключатель темной темы">
            <Switch onClick={toogleTheme} defaultChecked={themeData ? false : true} />
        </Tooltip>
    );
};

export default ThemeChecked;
