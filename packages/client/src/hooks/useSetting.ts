import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUserProfileChange, IUserPasswordChange, setUserProfile, setUserAvatar, setUserPassword } from '../api/user';
import { ROUTE_PATHS } from '../utils/routes';

export interface IUseUserReturn {
  changeProfile: (values: IUserProfileChange) => void
  changeAvatar: (event: React.ChangeEvent<HTMLFormElement>) => void
  changePassword: (data: IUserPasswordChange) => void
}

export const useSetting = (): IUseUserReturn => {
  const navigate = useNavigate();

  const changeProfile = useCallback(async (values: IUserProfileChange) => {
    try {
      await setUserProfile(values);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      return err;
    }
  }, []);

  const changeAvatar = useCallback(async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target);

    try {
      await setUserAvatar(form);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const changePassword = useCallback(async (data: IUserPasswordChange) => {
    try {
      await setUserPassword(data);
      navigate(ROUTE_PATHS.setting);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    changeProfile,
    changeAvatar,
    changePassword,
  };
};
