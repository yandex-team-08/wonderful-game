import ForumIcon from '@mui/icons-material/Forum';
import {
  Avatar, Divider,
  IconButton,
  ListItem,
  ListItemAvatar, ListItemText,
  Typography,
} from '@mui/material';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Post.module.scss';

import { ROUTE_PATHS } from '../../../../utils/routes';

type ForumPageProps = {
  id: number,
  author: string,
  subject: string,
  text: string,
};

const Post: FC<ForumPageProps> = (props) => {
  const navigate = useNavigate();

  const handlePostClick = useCallback(() => {
    navigate(ROUTE_PATHS.forum_page);
  }, []);

  return (
    <div className={styles.Post}>
      <ListItem secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <ForumIcon onClick={handlePostClick} />
        </IconButton>
      } alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>А</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.subject}
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
              {` — ${props.text}`}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default Post;
