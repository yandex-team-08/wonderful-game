import { FC } from 'react'
import Unauthorized from './Unauthorized'
import Authorized from './Authorized'
import { usePageContext } from '../../../../../../hooks/usePageContext'

const UserControls: FC = () => {
  const { userInfo } = usePageContext()

  //TODO: сделать динамические импорты
  return <>{userInfo ? <Authorized /> : <Unauthorized />}</>
}

export default UserControls
