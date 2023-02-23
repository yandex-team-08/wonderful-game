export interface IThemeUserApiModel {
    id: number | undefined,
}

export interface IThemeDataApiModel {
    user: IThemeUserApiModel,
    isNightModeEnabled: boolean,
}

export interface IThemeState {
    themes: IThemeDataApiModel,
};
