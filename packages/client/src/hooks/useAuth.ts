import { IUserInfo } from '../types/pageContext'
import { useCallback, useEffect, useState } from 'react'
import { getUserData } from '../api/auth'
import {
  getUserInfoFromSessionStorage,
  setUserInfoToSessionStorage,
} from '../utils/sessionStorage'
import { AUTHORIZED_ROUTES, UNAUTHORIZED_ROUTES } from '../utils/routes'

interface IUseAuthReturn {
  userInfo: IUserInfo | null
  isAuthorised: boolean
  userRoutes: typeof AUTHORIZED_ROUTES
}

export const useAuth = (): IUseAuthReturn => {
  const [isAuthorised, setIsAuthorised] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(
    getUserInfoFromSessionStorage()
  )

  const fetchUserInfo = useCallback(
    () =>
      getUserData()
        .then(({ data }) => {
          setUserInfo(data)
        })
        .catch(err => {
          console.log(err)
        }),
    []
  )

  useEffect(() => {
    fetchUserInfo()
  }, [])

  useEffect(() => {
    setUserInfoToSessionStorage(userInfo)
    setIsAuthorised(!!userInfo)
  }, [userInfo])

  return {
    userInfo,
    isAuthorised,
    userRoutes: isAuthorised ? AUTHORIZED_ROUTES : UNAUTHORIZED_ROUTES,
  }
}
