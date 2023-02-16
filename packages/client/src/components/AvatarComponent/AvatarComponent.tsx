import { Avatar } from '@mui/material';
import { useAppSelector } from '@src/hooks/useAppSelector';
import { selectUserInfo } from '@src/store/selectors';
import { FC } from 'react';

import { AvatarComponentAPI } from './AvatarComponentAPI';

interface IMainAvatarComponentProps {
    className?: string
    }

const AvatarComponent: FC<IMainAvatarComponentProps> = ({ className }) => {
  const userInfo = useAppSelector(selectUserInfo);
  const { avatar } = userInfo ?? {};

  const avatarSrc = AvatarComponentAPI + avatar;

  return (
    <Avatar alt='user avatar' src={avatarSrc} className={className}/>
  );
};

export default AvatarComponent;
