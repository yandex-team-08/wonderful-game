import AvatarComponent from '@src/components/AvatarComponent';
import { withAccessRights } from '@src/HOCs';
import { useAppSelector } from '@src/hooks/useAppSelector';
import { selectUserInfo } from '@src/store/selectors';
import { IOutletContext } from '@src/utils/OutletContext';
import { FC, useEffect, useMemo } from 'react';
import { useOutletContext } from 'react-router';

import PopupAvatar from './components/PopupAvatar';
import PopupProfileData from './components/PopupProfileData';
import PopupProfilePassword from './components/PopupProfilePassword';
import ProfileField from './components/ProfileField';
import styles from './Profile.module.scss';

const ProfilePage: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const userInfo = useAppSelector(selectUserInfo);
  const { first_name, second_name, display_name, login, email, phone } = userInfo ?? {};

  const nameString = useMemo(
    () => (!display_name ? `${first_name} ${second_name}` : display_name),
    [first_name, second_name, display_name]
  );

  useEffect(() => {
    setPageName('Профиль');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <AvatarComponent className={styles.avatar} />
        <PopupAvatar buttonText='Изменить аватар'></PopupAvatar>
        <PopupProfileData buttonText='Изменить данные' ></PopupProfileData>
        <PopupProfilePassword buttonText='Изменить пароль' ></PopupProfilePassword>
      </div>
      <div className={styles.list}>
        <ProfileField fieldName={'Имя'} fieldText={first_name}></ProfileField>
        <ProfileField fieldName={'Фамилия'} fieldText={second_name}></ProfileField>
        <ProfileField fieldName={'Ник'} fieldText={nameString}></ProfileField>
        <ProfileField fieldName={'Логин'} fieldText={login}></ProfileField>
        <ProfileField fieldName={'Почта'} fieldText={email}></ProfileField>
        <ProfileField fieldName={'Телефон'} fieldText={phone}></ProfileField>
      </div>
    </div>
  );
};

export default withAccessRights(ProfilePage);
