import styles from './PageWrapper.module.scss'
import { PageContext } from '../../utils/PageContext'
import { useNavigate, useMatch } from 'react-router-dom'
import { FC, ReactNode, useEffect } from 'react'
import { ROUTE_PATHS } from '../../utils/routes'
import { useLocation } from 'react-router'
import { getIsAuthorisedToAccessPage } from '../../utils/getIsAuthorisedToAccessPage'
import { useAuth } from '../../hooks/useAuth'

const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isRoot = !!useMatch(ROUTE_PATHS.base)

  const { userInfo, isAuthorised, userRoutes } = useAuth()

  useEffect(() => {
    if (isRoot || !getIsAuthorisedToAccessPage(location, userRoutes.list)) {
      navigate(userRoutes.basePath)
    }
  }, [])

  return (
    <PageContext.Provider
      value={{
        userInfo,
        isAuthorised,
      }}>
      <div className={styles.wrapper}>{children}</div>
    </PageContext.Provider>
  )
}

export default PageWrapper
