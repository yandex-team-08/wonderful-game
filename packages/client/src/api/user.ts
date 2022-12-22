import axios, { AxiosPromise } from 'axios';

import { IUserInfo } from '../types/pageContext';
import { USER_API } from '../utils/constants';

/**
 * Изменение данных профиля
 */
export interface IUserProfileChange {
    first_name: string | undefined
    second_name: string | undefined
    display_name: string | undefined
    login: string | undefined
    email: string | undefined
    phone: string | undefined
  }

export const setUserProfile = (data: IUserProfileChange): AxiosPromise<IUserInfo> =>
  axios.put(`${USER_API}/profile`, data, { withCredentials: true });

/**
 * Изменение аватара
 */
export const setUserAvatar = (data: FormData): AxiosPromise<IUserInfo> =>
  axios.put(`${USER_API}/profile/avatar`, data, { withCredentials: true });

/**
 * Изменение пароля
 */
export interface IUserPasswordChange {
    oldPassword: string
    newPassword: string
  }

export const setUserPassword = (data: IUserPasswordChange): AxiosPromise =>
  axios.put(`${USER_API}/password`, data, { withCredentials: true });
