import { ThemeApiService } from '@src/api/themeAPI';
import { setThemes } from '@src/store/reducers';
import { IThemeDataApiModel } from '@src/types/themeTypes';

import { TAuthAction } from './auth';
import { handleError } from './forum';

import { selectUserInfo } from '../selectors';

export const getUserTheme = (userId: number | undefined): TAuthAction =>
    async dispatch => {
        try {
            const { data } = await ThemeApiService.getTheme(userId);
            dispatch(setThemes(data));
        } catch (err) {
            handleError(err);
        }
    };

export const setUserTheme = (data: Omit<IThemeDataApiModel, 'user'>): TAuthAction => async (dispatch, getState) => {
    const userInfo = selectUserInfo(getState());

    if (userInfo) {
        const { id } = userInfo ?? {};
        const request = {
            ...data,
            user: {
                id: id,
            },
        };

        try {
            await ThemeApiService.setTheme(request);
            dispatch(getUserTheme(id));
        } catch (err) {
            handleError(err);
        }
    } else {
        console.error('No Logged-in user');
    }

};
