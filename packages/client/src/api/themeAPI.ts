import type { IThemeDataApiModel } from '@src/types/themeTypes';
import { SERVER_API } from '@src/utils/constants';
import axios, { type AxiosPromise } from 'axios';

const themeApi = axios.create({
    baseURL: SERVER_API,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const ThemeApiService = {
    getTheme(userId: number | undefined): AxiosPromise<IThemeDataApiModel> {
        return themeApi.get(`/getIsNightModeEnabled?id=${userId}`);
    },
    setTheme(data: IThemeDataApiModel): AxiosPromise {
        return themeApi.put('/setIsNightModeEnabled', data);
    },

};
