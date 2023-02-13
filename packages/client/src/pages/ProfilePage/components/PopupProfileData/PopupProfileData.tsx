import { Button, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useMemo, useState } from 'react';

import styles from './PopupProfileData.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../../../components/Formik/FormikTextField';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useSetting } from '../../../../hooks/useSetting';
import { selectUserInfo } from '../../../../store/selectors';

interface IMainButtonPopupProps {
  buttonText: string
}

const PopupProfileData: FC<IMainButtonPopupProps> = ({ buttonText }) => {
  const { changeProfile } = useSetting();

  const userInfo = useAppSelector(selectUserInfo);
  const { first_name, second_name, display_name, login, email, phone } = userInfo ?? {};
  const nameString = useMemo(
    () => (!display_name ? `${first_name} ${second_name}` : display_name),
    [first_name, second_name, display_name]
  );

  const initialValues = {
    first_name,
    second_name,
    display_name: nameString,
    login,
    email,
    phone,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button
        variant='contained'
        type='button'
        sx={{ marginBottom: '25px' }}
        onClick={handleOpen}>
      {buttonText}</Button>
      <Modal open={open} onClose={handleClose}>
        <Formik<typeof initialValues>
          initialValues={initialValues}
          onSubmit={changeProfile}
          validationSchema={validationSchema}
          validateOnChange={false}>
          <Form className={styles.form}>
            <FormikTextField name="first_name" label="Имя" />
            <FormikTextField name="second_name" label="Фамилия" />
            <FormikTextField name="display_name" label="Ник" />
            <FormikTextField name="login" label="Логин" />
            <FormikTextField name="email" label="Почта" />
            <FormikTextField name="phone" label="Телефон" />
            <Button variant="contained" type="submit" sx={{ marginTop: '15px' }}>
              Изменить данные
            </Button>
          </Form>
        </Formik>
      </Modal>
    </div>);
};

export default PopupProfileData;
