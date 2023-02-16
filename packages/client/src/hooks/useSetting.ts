import { IUserProfileChange, IUserPasswordChange } from '@src/api/user';
import { changeProfile, changeAvatar, changePassword } from '@src/store/actions/profile';

import { useAppDispatch } from './useAppDispatch';

export interface IUseUserReturn {
    changeProfile: (values: IUserProfileChange) => void
    changeAvatar: (event: React.ChangeEvent<HTMLFormElement>) => void
    changePassword: (values: IUserPasswordChange) => void
}

export const useSetting = (): IUseUserReturn => {
    const dispatch = useAppDispatch();

    return {
        changeProfile: values => dispatch(changeProfile(values)),
        changeAvatar: event => dispatch(changeAvatar(event)),
        changePassword: values => dispatch(changePassword(values)),
    };
};
