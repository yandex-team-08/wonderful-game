import { Divider, ListItem, Typography } from '@mui/material';
import { FC } from 'react';

import styles from './ProfileField.module.scss';

interface IMainProfileFieldProps {
    fieldName: string,
    fieldText: string | undefined
  }

const ProfileField : FC<IMainProfileFieldProps> = ({ fieldName, fieldText }) =>  {
  return(
    <>
    <Divider textAlign='left'>{fieldName}</Divider>
    <ListItem className={styles.item}>
    <Typography variant='h6' className={styles.text}>{fieldText}</Typography>
    </ListItem>
    </>
  );
};

export default ProfileField;
