import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import Popup from 'reactjs-popup';

import styles from './PopupProfilePassword.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../../../components/Formik/FormikTextField';
import { useSetting } from '../../../../hooks/useSetting';

interface IMainButtonPopupProps {
    buttonText: string
  }

const PopupProfilePassword : FC<IMainButtonPopupProps> = ({ buttonText }) =>  {
    const { password } = useSetting();

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
                onSubmit={password}
                validationSchema={validationSchema}
                validateOnChange={false}>
                <Form className={styles.form}>
                <FormikTextField name="oldPassword" label="Старый пароль" />
                <FormikTextField name="newPassword" label="Новый пароль" />
                <FormikTextField name="repeatNewPassword" label="Повторите новый пароль" />
                <Button variant="contained" type="submit" sx={{ marginTop: '15px' }}>
                    Изменить пароль
                </Button>
                </Form>
            </Formik>
            </div>
        </Popup>);
};

export default PopupProfilePassword;
