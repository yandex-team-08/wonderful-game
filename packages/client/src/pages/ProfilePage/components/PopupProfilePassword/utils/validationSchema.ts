import { object, string } from 'yup';

const FIELD_REQUIRED = 'Введите пароль';

export const validationSchema = object().shape({
    oldPassword: string().required(FIELD_REQUIRED),
    newPassword: string().required(FIELD_REQUIRED),
    repeatNewPassword: string().required(FIELD_REQUIRED),
});
