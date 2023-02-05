import { Avatar } from '@mui/material';
import { FC, useMemo } from 'react';

import { AvatarComponentAPI } from './AvatarComponentAPI';

import { usePageContext } from '../../hooks/usePageContext';

interface IMainAvatarComponentProps {
    className?: string
    }

const AvatarComponent: FC<IMainAvatarComponentProps> = ({ className }) => {
  const { userInfo } = usePageContext();
  const { avatar } = userInfo ?? {};

  const avatarSrc = useMemo(
    () => (AvatarComponentAPI + avatar),
    [AvatarComponentAPI, avatar]
  );

  return (
      <Avatar alt='user avatar' src={avatarSrc} className={className}/>
  );
};

export default AvatarComponent;
