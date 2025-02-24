import { Button } from '@mui/material';
import { IUserSignUpReq } from '@src/api/auth';
import { withAccessRights } from '@src/HOCs';
import { useAuth } from '@src/hooks/useAuth';
import { IOutletContext } from '@src/utils/OutletContext';
import { Form, Formik } from 'formik';
import { FC, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import styles from './Signup.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../components/Formik/FormikTextField';

const initialValues = {
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  password: '',
  phone: '',
};

const Signup: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const { signup } = useAuth();

  useEffect(() => {
    setPageName('Регистрация');
  }, []);

  const handleSubmit = (values: IUserSignUpReq) => {
    signup(values);
  };

  return (
    <div className={styles.wrapper}>
      <Formik<IUserSignUpReq>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}>
        <Form className={styles.form}>
          <div className={styles.form__row}>
            <FormikTextField name="first_name" label="Имя" />
            <FormikTextField name="second_name" label="Фамилия" />
          </div>
          <div className={styles.form__row}>
            <FormikTextField name="login" label="Логин" />
            <FormikTextField name="password" label="Пароль" type="password" />
          </div>
          <div className={styles.form__row}>
            <FormikTextField name="email" label="Почта" />
            <FormikTextField name="phone" label="Телефон" />
          </div>

          <Button variant="contained" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default withAccessRights(Signup);
