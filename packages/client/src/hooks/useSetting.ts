import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUserProfileChange, IUserPasswordChange, setUserProfile, setUserAvatar, setUserPassword } from '../api/user';
import { ROUTE_PATHS } from '../utils/routes';

export interface IUseUserReturn {
  profile: (values: IUserProfileChange) => void
  avatar: (data: FormData) => void
  password: (data: IUserPasswordChange) => void
}

export const useSetting = (): IUseUserReturn => {
  const navigate = useNavigate();

  const profile = useCallback(async (values: IUserProfileChange) => {
    try {
      await setUserProfile(values);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      return err;
    }
  }, []);

  const avatar = useCallback(async (data: FormData) => {
    try {
      await setUserAvatar(data);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const password = useCallback(async (data: IUserPasswordChange) => {
    try {
      await setUserPassword(data);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    profile,
    avatar,
    password,
  };
};
