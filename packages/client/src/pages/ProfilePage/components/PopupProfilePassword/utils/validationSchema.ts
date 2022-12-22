import { object, string, ref } from 'yup';

const FIELD_REQUIRED = 'Введите пароль';

export const validationSchema = object().shape({
    oldPassword: string().required(FIELD_REQUIRED),
    newPassword: string().required(FIELD_REQUIRED),
    repeatNewPassword: string().oneOf([ref('newPassword')], 'Пароли не совпадают').required(FIELD_REQUIRED),
});
