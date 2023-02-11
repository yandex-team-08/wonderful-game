import { useAppDispatch } from './useAppDispatch';

import { IUserProfileChange, IUserPasswordChange } from '../api/user';
import { changeProfile, changeAvatar, changePassword } from '../store/actions/profile';

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
