import { Gamepad } from '@mui/icons-material';
import { Button, CircularProgress, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';

import GameControl from './components/GameControl';
import styles from './Game.module.scss';

import { GameStateEnum } from '../../enums/game-state.enum';
import { IOutletContext } from '../../utils/OutletContext';

const Game: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const [state, setState] = useState(GameStateEnum.START);

  useEffect(() => {
    setPageName('Играть');
  }, []);

  function handleStartGame() {
    setState(GameStateEnum.LOADING);
  }

  return <div className={styles.Game}>
    <div className={styles.Game__body}>
      {{
        [GameStateEnum.START]: <Button onClick={handleStartGame} variant="outlined">Играть</Button>,
        [GameStateEnum.LOADING]: <CircularProgress />,
        [GameStateEnum.GAME]: <div>Игра</div>,
      }[state]}
    </div>
    <div className={styles.Game__footer}>
      <div className={styles.Game__control}>
        <Tooltip title={<GameControl/>}>
          <Gamepad color={'primary'}/>
        </Tooltip>
      </div>
    </div>
  </div>;
};

export default Game;
