import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useMemo } from 'react';
import Popup from 'reactjs-popup';

import styles from './PopupProfileData.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../../../components/Formik/FormikTextField';
import { usePageContext } from '../../../../hooks/usePageContext';
import { useSetting } from '../../../../hooks/useSetting';

interface IMainButtonPopupProps {
    buttonText: string
  }

const PopupProfileData : FC<IMainButtonPopupProps> = ({ buttonText }) =>  {
    const { profile } = useSetting();

    const { userInfo } = usePageContext();
    const { first_name, second_name, display_name, login, email, phone } = userInfo ?? {};
    const nameString = useMemo(
        () => (!display_name ? `${first_name} ${second_name}` : display_name),
        [first_name, second_name, display_name]
      );

    const initialValues = {
        first_name: first_name,
        second_name: second_name,
        display_name: nameString,
        login: login,
        email: email,
        phone: phone,
      };

    return(
        <Popup trigger={<Button variant='contained' type='button' sx={{ marginBottom: '25px' }}>{buttonText}</Button>} position="right center">
            <div  className={styles.wrapper}>
            <Formik<typeof initialValues>
                initialValues={initialValues}
                onSubmit={profile}
                validationSchema={validationSchema}
                validateOnChange={false}>
                <Form className={styles.form}>
                <FormikTextField name="first_name" label="Имя" />
                <FormikTextField name="second_name" label="Фамилия"/>
                <FormikTextField name="display_name" label="Ник" />
                <FormikTextField name="login" label="Логин"/>
                <FormikTextField name="email" label="Почта" />
                <FormikTextField name="phone" label="Телефон"/>
                <Button variant="contained" type="submit" sx={{ marginTop: '15px' }}>
                    Изменить данные
                </Button>
                </Form>
            </Formik>
            </div>
        </Popup>);
};

export default PopupProfileData;

