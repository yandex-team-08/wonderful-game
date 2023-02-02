import SendIcon from '@mui/icons-material/Send';
import { Box, Button } from '@mui/material';
import FormikTextField from '@src/components/Formik/FormikTextField';
import { useAppDispatch } from '@src/hooks/useAppDispatch';
import { validationSchemaComment } from '@src/pages/Forum/utils/validationSchema';
import { setCommentForThread } from '@src/store/actions/forum';
import { Formik, FormikHelpers } from 'formik';
import { FC } from 'react';

type TInitialVal = { content: string };

const MessageField: FC = () => {
  const dispatch = useAppDispatch();

  const initialVal: TInitialVal = { content: '' };

  const handleOnSubmit = async (values: TInitialVal, props: FormikHelpers<TInitialVal>) => {
    dispatch(setCommentForThread(values));
    props.resetForm();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Formik
        initialValues={initialVal}
        validationSchema={validationSchemaComment}
        validateOnChange={false}
        onSubmit={handleOnSubmit}
      >
        {props => {
          const {
            isSubmitting,
            handleSubmit,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <FormikTextField id="content" name="content" label="Введите комментарий" fullWidth
                multiline
                rows={3}
              />
              <Button variant="contained" type="submit" disabled={isSubmitting} endIcon={<SendIcon />}>
                Отправить
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default MessageField;
