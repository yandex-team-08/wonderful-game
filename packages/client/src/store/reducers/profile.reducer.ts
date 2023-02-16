import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from '@src/types/userInfo';

export interface IUserState {
    userInfo: IUserInfo | null;
}

const initialState: IUserState = {
    userInfo: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserSetting: (
            state: IUserState,
            { payload }: PayloadAction<IUserInfo | null>
        ) => {
            state.userInfo = payload;
        },
    },
});

export const { setUserSetting } = profileSlice.actions;

export default profileSlice.reducer;
