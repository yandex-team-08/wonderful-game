import { Button, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';

import styles from './PopupProfilePassword.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../../../components/Formik/FormikTextField';
import { useSetting } from '../../../../hooks/useSetting';

interface IMainButtonPopupProps {
    buttonText: string
  }

const PopupProfilePassword : FC<IMainButtonPopupProps> = ({ buttonText }) =>  {
    const { changePassword } = useSetting();

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div >
        <Button variant='contained' type='button' sx={{ marginBottom: '25px' }} onClick={handleOpen}>{buttonText}</Button>
            <Modal open={open} onClose={handleClose}>
                <Formik<typeof initialValues>
                    initialValues={initialValues}
                    onSubmit={changePassword}
                    validationSchema={validationSchema}
                    validateOnChange={false}>
                    <Form className={styles.form}>
                        <FormikTextField name="oldPassword" label="Старый пароль" type='password'/>
                        <FormikTextField name="newPassword" label="Новый пароль" type='password'/>
                        <FormikTextField name="repeatNewPassword" label="Повторите новый пароль" type='password'/>
                        <Button variant="contained" type="submit" sx={{ marginTop: '15px' }}>
                            Изменить пароль
                        </Button>
                    </Form>
                </Formik>
            </Modal>
        </div>);
};

export default PopupProfilePassword;
