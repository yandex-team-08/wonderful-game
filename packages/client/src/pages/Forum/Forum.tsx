import { List } from '@mui/material';
import { FC, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import Post from './components/Post';
import styles from './Forum.module.scss';

import { IOutletContext } from '../../utils/OutletContext';

const Forum: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const MOCK = {
    posts: [
      { id: 1, author: 'Автор', subject: 'Тема', text: 'Текст' },
      { id: 2, author: 'Автор', subject: 'Тема', text: 'Текст' },
      { id: 3, author: 'Автор', subject: 'Тема', text: 'Текст' },
    ],
  };

  useEffect(() => {
    setPageName('Форум');
  }, []);

  return (
    <div className={styles.wrapper}>
      <List sx={{ width: '100%' }}>
        {MOCK.posts && MOCK.posts.map(post => <Post key={post.id}
                                                    id={post.id}
                                                    author={post.author}
                                                    subject={post.subject}
                                                    text={post.text}/>)
        }
      </List>
    </div>
  );
};

export default Forum;
