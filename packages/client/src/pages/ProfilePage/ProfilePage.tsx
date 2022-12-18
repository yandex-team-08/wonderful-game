import { Divider, Avatar, ListItem, Typography, Button } from '@mui/material';
import { FC, useEffect, useMemo } from 'react';
import { useOutletContext } from 'react-router';

import styles from './Profile.module.scss';

import { avatarAPI } from '../../api/user';
import { useChangeProfile } from '../../hooks/useChangeProfile';
import { usePageContext } from '../../hooks/usePageContext';
import { IOutletContext } from '../../utils/OutletContext';

const ProfilePage: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const { changeData, changePass } = useChangeProfile();
const { userInfo } = usePageContext();
const { first_name, second_name, display_name, login, email, phone, avatar } = userInfo ?? {};

const avatarSrc = useMemo(
  () => (!avatarAPI ? '/' : avatarAPI + avatar),
  [avatarAPI, avatar]
);

const nameString = useMemo(
  () => (!display_name ? `${first_name} ${second_name}` : display_name),
  [first_name, second_name, display_name]
);

  useEffect(() => {
    setPageName('Профиль');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
      <Avatar alt='user avatar' className={styles.avatar} src={avatarSrc} sx={{ width: 300, height: 300, marginBottom: '25px' }}/>
      <Button variant='contained' type='button' sx={{ marginBottom: '25px' }} onClick={changeData}>Изменить данные</Button>
      <Button variant='contained' type='button' onClick={changePass}>Изменить пароль</Button>
      </div>

      <div className={styles.list}>
          <Divider textAlign='left'>Имя</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{first_name}</Typography>
            </ListItem>
            <Divider textAlign='left'>Фамилия</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{second_name}</Typography>
            </ListItem>
            <Divider textAlign='left'>Ник</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{nameString}</Typography>
            </ListItem>
            <Divider textAlign='left'>Логин</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{login}</Typography>
            </ListItem>
            <Divider textAlign='left'>Почта</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{email}</Typography>
            </ListItem>
            <Divider textAlign='left'>Телефон</Divider>
            <ListItem sx={{ justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ color: '#1976d2' }}>{phone}</Typography>
            </ListItem>
      </div>
    </div>
  );
};

export default ProfilePage;

