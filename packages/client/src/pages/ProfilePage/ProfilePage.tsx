import { Divider, Avatar, ListItem, Typography, Button } from '@mui/material';
import { FC, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import styles from './Profile.module.scss';

import { IOutletContext } from '../../utils/OutletContext';

const ProfilePage: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();

  useEffect(() => {
    setPageName('Профиль');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
      <Avatar alt='user avatar' className={styles.avatar} src='https://cdn.shopify.com/s/files/1/2572/7700/products/Colorful-Rainbow-Monkey-Paint-By-Numbers-Kit-Main-min.jpg?v=1553577154' sx={{ width: 300, height: 300, marginBottom: '25px' }}/>
      <Button variant='contained' type='button' sx={{ marginBottom: '25px' }}>Изменить данные</Button>
      <Button variant='contained' type='button'>Изменить пароль</Button>
      </div>

      <div className={styles.list}>
          <Divider textAlign='left'>Имя</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>Inna</Typography>
            </ListItem>
            <Divider textAlign='left'>Фамилия</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>Batalova</Typography>
            </ListItem>
            <Divider textAlign='left'>Ник</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>InnaBatalova</Typography>
            </ListItem>
            <Divider textAlign='left'>Логин</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>inbat</Typography>
            </ListItem>
            <Divider textAlign='left'>Почта</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>inbat@bk.ru</Typography>
            </ListItem>
            <Divider textAlign='left'>Телефон</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>8-926-84-86-587</Typography>
            </ListItem>
      </div>
    </div>
  );
};

export default ProfilePage;

