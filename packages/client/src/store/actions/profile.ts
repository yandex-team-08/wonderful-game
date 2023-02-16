import {
    IUserProfileChange,
    IUserPasswordChange,
    setUserProfile,
    setUserAvatar,
    setUserPassword,
} from '@src/api/user';

import { TAuthAction, getUserInfo } from './auth';

export const changeProfile =
    (data: IUserProfileChange): TAuthAction =>
        async dispatch => {
            try {
                await setUserProfile(data);
            } catch (err) {
                return err;
            } finally {
                dispatch(getUserInfo());
            }
        };

export const changeAvatar = (event: React.ChangeEvent<HTMLFormElement>): TAuthAction => async dispatch => {
    event.preventDefault();
    const form = new FormData(event.target);

    try {
        await setUserAvatar(form);
    } catch (err) {
        console.error(err);
    } finally {
        dispatch(getUserInfo());
    }
};

export const changePassword =
    (data: IUserPasswordChange): TAuthAction =>
        async dispatch => {
            try {
                await setUserPassword(data);
            } catch (err) {
                console.error(err);
            } finally {
                dispatch(getUserInfo());
            }
        };
