import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useCallback } from 'react';
import Popup from 'reactjs-popup';

import styles from './PopupProfilePassword.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../../../components/Formik/FormikTextField';

interface IMainButtonPopupProps {
    buttonText: string
  }

const PopupProfilePassword : FC<IMainButtonPopupProps> = ({ buttonText }) =>  {
    const test = useCallback(async (values: any) => {
        try {
            console.log(values);
        } catch (err) {
            return err;
        }
        }, []);

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
      };

    return(
        <Popup trigger={<Button variant='contained' type='button' sx={{ marginBottom: '25px' }}>{buttonText}</Button>} position="right center">
            <div  className={styles.wrapper}>
            <Formik<typeof initialValues>
                initialValues={initialValues}
                onSubmit={test}
                validationSchema={validationSchema}
                validateOnChange={false}>
                <Form className={styles.form}>
                <FormikTextField name="oldPassword" label="Старый пароль" type="password"/>
                <FormikTextField name="newPassword" label="Новый пароль" type="password"/>
                <FormikTextField name="repeatNewPassword" label="Повторите новый пароль" type="password"/>
                <Button variant="contained" type="submit" sx={{ marginTop: '15px' }}>
                    Изменить пароль
                </Button>
                </Form>
            </Formik>
            </div>
        </Popup>);
};

export default PopupProfilePassword;
