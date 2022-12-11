import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useOutletContext } from 'react-router';

import styles from './Login.module.scss';
import { validationSchema } from './utils/validationSchema';

import FormikTextField from '../../components/Formik/FormikTextField';
import { useAuth } from '../../hooks/useAuth';
import { IOutletContext } from '../../utils/OutletContext';
import { ErrorFallback } from '../Errors/utils/ErrorBoundary';

const initialValues = {
  login: '',
  password: '',
};

const Login: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const { login } = useAuth();

  useEffect(() => {
    setPageName('Вход');
  }, []);

  //логика для тестирования ErrorBoundary
  // let [count, setCount] = useState({user: '', name: ''});

  // function errorLog(){
  //   setCount(count = {user: null})
  // }
  //добавить к детям тестируемого блока
  //<Button type="button" onClick={errorLog}>
          //{count}
  // </Button>

  return (
    <div className={styles.wrapper}>
      <Formik<typeof initialValues>
        initialValues={initialValues}
        onSubmit={login}
        validationSchema={validationSchema}
        validateOnChange={false}>
        <ErrorBoundary FallbackComponent={ErrorFallback} >
        <Form className={styles.form}>
          <FormikTextField name="login" label="Логин" />
          <FormikTextField name="password" label="Пароль" type="password" />
          <Button variant="contained" type="submit">
            Войти
          </Button>
        </Form>
        </ErrorBoundary>
      </Formik>
    </div>
  );
};

export default Login;
