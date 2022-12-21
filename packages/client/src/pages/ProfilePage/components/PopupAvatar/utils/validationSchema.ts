import { object, mixed } from 'yup';

const FIELD_REQUIRED = 'Поле обязательно для заполнения';

export const validationSchema = object().shape({
    image: mixed().required(FIELD_REQUIRED),
});
