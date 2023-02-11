import { Avatar } from '@mui/material';
import { FC } from 'react';

import { AvatarComponentAPI } from './AvatarComponentAPI';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUserInfo } from '../../store/selectors';

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
