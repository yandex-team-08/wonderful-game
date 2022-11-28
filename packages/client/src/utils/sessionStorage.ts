import { IUserInfo } from '../types/pageContext'

export const setSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key: string) => {
  const item = sessionStorage.getItem(key)

  return item ? JSON.parse(item) : null
}

/**
 * работа с данными пользователя в сессии
 */
export const USER_INFO_SS_KEY = 'user_info'

export const getUserInfoFromSessionStorage = () =>
  getSessionStorage(USER_INFO_SS_KEY)

export const setUserInfoToSessionStorage = (userInfo: IUserInfo | null) =>
  setSessionStorage(USER_INFO_SS_KEY, userInfo)
