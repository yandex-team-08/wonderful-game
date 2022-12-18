export interface IUseAuthReturn {
  changeData: VoidFunction,
  changePass: VoidFunction,
}

export const useChangeProfile = (): IUseAuthReturn => {

const changeData = () => {
    console.log('changeData');
};

const changePass = () => {
    console.log('changePass');
};

    return {
        changeData,
        changePass,
    };
};
