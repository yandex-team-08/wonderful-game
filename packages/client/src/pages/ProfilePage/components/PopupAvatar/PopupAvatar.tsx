import { Button, Modal } from '@mui/material';
import { useSetting } from '@src/hooks/useSetting';
import { FC, useState } from 'react';

import styles from './PopupAvatar.module.scss';

interface IMainButtonPopupProps {
    buttonText: string
}

const PopupAvatar: FC<IMainButtonPopupProps> = ({ buttonText }) => {
    const { changeAvatar } = useSetting();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <Button
                variant='contained'
                type='button'
                sx={{ marginBottom: '25px' }}
                onClick={handleOpen}
                className={styles.button}>
            {buttonText}</Button>
            <Modal open={open} onClose={handleClose}>
                <form onSubmit={changeAvatar} className={styles.form}>
                    <input name="avatar" type="file" />
                    <Button variant='contained' type='submit' sx={{ marginTop: '15px' }}>
                        Загрузить аватар
                    </Button>
                </form>
            </Modal>
        </div>);
};

export default PopupAvatar;
