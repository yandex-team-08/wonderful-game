import {
  Avatar, Divider,
  ListItem,
  ListItemAvatar, ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';

import styles from './Message.module.scss';

type ForumPageProps = {
  id: number,
  author: string,
  text: string,
};

const Message: FC<ForumPageProps> = (props) => {
  return (
    <div className={styles.Post}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>А</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.author}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default Message;
