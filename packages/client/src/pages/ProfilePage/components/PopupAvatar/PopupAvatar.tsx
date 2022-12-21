import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { ImageInput } from 'formik-file-and-image-input/lib';
import { FC, useCallback } from 'react';
import Popup from 'reactjs-popup';

import styles from './PopupAvatar.module.scss';
import { validationSchema } from './utils/validationSchema';

interface IMainButtonPopupProps {
    buttonText: string
  }

const PopupAvatar : FC<IMainButtonPopupProps> = ({ buttonText }) =>  {
    const test = useCallback(async (values: any) => {
    try {
        console.log(values);
    } catch (err) {
        return err;
    }
    }, []);

    const imageFormats = ['image/png', 'image/svg', 'image/jpeg', 'image/jpg'];
    const initialValues = {
        image: null,
    };

    return(
        <Popup trigger={<Button variant='contained' type='button' className={styles.button}>{buttonText}</Button>} position="right center">
            <div className={styles.wrapper}>
                <Formik<typeof initialValues>
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={test}>
                    <Form className={styles.form}>
                        <ImageInput name='image' validFormats={imageFormats}/>
                        <Button variant='contained' type='submit' sx={{ marginTop: '15px' }}>
                            Загрузить аватар
                        </Button>
                    </Form>
                </Formik>
            </div>
        </Popup>);
};

export default PopupAvatar;
