import axios, { AxiosPromise } from 'axios'
import { YANDEX_API } from '../utils/constants'
import { IUserInfo } from '../types/pageContext'

/**
 * Получение данных пользователя
 */
export const getUserData = (): AxiosPromise<IUserInfo> =>
  axios.get(`${YANDEX_API}/auth/user`)

/**
 * Логин
 */
export interface IUserSigninReq {
  login: string
  password: string
}

export const signIn = (data: IUserSigninReq): AxiosPromise =>
  axios.post(`${YANDEX_API}/auth/signin`, data)
