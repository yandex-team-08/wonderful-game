import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { IThemeDataApiModel, IThemeState } from '@src/types/themeTypes';

const initialState: IThemeState = {
    themes: { isNightModeEnabled: true, user: { id: undefined } },
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemes: (
            state: IThemeState,
            { payload }: PayloadAction<IThemeDataApiModel>
        ) => {
            state.themes = payload;
        },
    },
});

export const { setThemes } = themeSlice.actions;

export default themeSlice.reducer;
