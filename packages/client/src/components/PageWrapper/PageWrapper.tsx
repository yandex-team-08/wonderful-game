import styles from './PageWrapper.module.scss'
import { useNavigate, useMatch } from 'react-router-dom'
import { FC, ReactNode, useEffect } from 'react'
import { ROUTE_PATHS } from '../../utils/routes'
import { useLocation } from 'react-router'
import { getIsAuthorisedToAccessPage } from '../../utils/getIsAuthorisedToAccessPage'
import { PageContext } from '../../hooks/usePageContext'
import { useRootLoaderData } from '../../hooks/useRootLoaderData'

const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isRoot = !!useMatch(ROUTE_PATHS.root)

  const { userInfo, userRoutes } = useRootLoaderData()

  useEffect(() => {
    if (isRoot || !getIsAuthorisedToAccessPage(location, userRoutes.list)) {
      navigate(userRoutes.basePath)
    }
  }, [userRoutes])

  return (
    <PageContext.Provider value={{ userInfo }}>
      <div className={styles.wrapper}>{children}</div>
    </PageContext.Provider>
  )
}

export default PageWrapper
