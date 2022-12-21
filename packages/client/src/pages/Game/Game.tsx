import { Gamepad } from '@mui/icons-material';
import { Button, CircularProgress, Tooltip } from '@mui/material';
import { FC, useCallback, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router';

import GameControl from './components/GameControl';
import styles from './Game.module.scss';

import { gameStateEnum } from '../../enums/gameState.enum';
import { loading } from '../../reducers/game.reducer';
import { gameInterface } from '../../types/game.interface';
import { IOutletContext } from '../../utils/OutletContext';

const Game: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const status = useSelector((state: { game: gameInterface }) => state.game.status);
  const dispatch = useDispatch();

  useEffect(() => {
    setPageName('Играть');
  }, []);

  const handleStartGame = useCallback(
    () => {
      dispatch(loading());
    },
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.game__body}>
        {{
          [gameStateEnum.START]: <Button onClick={handleStartGame} variant="outlined">Играть</Button>,
          [gameStateEnum.LOADING]: <CircularProgress />,
          [gameStateEnum.PLAY]: <div>Игра</div>,
        }[status]}
      </div>
      <div className={styles.game__footer}>
        <div className={styles.game__control}>
          <Tooltip title={<GameControl/>}>
            <Gamepad color={'primary'}/>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Game;
