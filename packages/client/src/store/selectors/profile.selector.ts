import { RootState } from '../store';

export const selectProfile = (state: RootState) => state.profile.userInfo;
