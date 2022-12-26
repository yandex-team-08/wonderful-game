import { FC } from 'react';

import Authorized from './Authorized';
import Unauthorized from './Unauthorized';

import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import { selectUserInfo } from '../../../../../../store/selectors';

const UserControls: FC = () => {
  const userInfo = useAppSelector(selectUserInfo);

  return <>{userInfo ? <Authorized /> : <Unauthorized />}</>;
};

export default UserControls;
