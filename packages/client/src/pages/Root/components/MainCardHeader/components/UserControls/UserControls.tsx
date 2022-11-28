import { FC } from 'react'
import Unauthorized from './Unauthorized'
import Authorized from './Authorized'

const UserControls: FC = () => {
  const isAuthorised = false

  return <>{isAuthorised ? <Authorized /> : <Unauthorized />}</>
}

export default UserControls
