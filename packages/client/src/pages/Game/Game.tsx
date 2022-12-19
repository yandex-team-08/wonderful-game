import { Gamepad } from '@mui/icons-material';
import { Button, CircularProgress, Tooltip } from '@mui/material';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router';

import { GameCanvas } from './components/Canvas';
import GameControl from './components/GameControl';
import ResizeButton from './components/ResizeButton';
import styles from './Game.module.scss';

import { gameStateEnum } from '../../enums/gameState.enum';
import { IOutletContext } from '../../utils/OutletContext';

const Game: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const [state, setState] = useState(gameStateEnum.START);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setPageName('Играть');
  }, []);

  const handleStartGame = useCallback(() => {
    setState(gameStateEnum.LOADING);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.game__body}>
        {
          {
            [gameStateEnum.START]: (
              <Button onClick={handleStartGame} variant="outlined">
                Играть
              </Button>
            ),
            [gameStateEnum.LOADING]: <CircularProgress />,
            [gameStateEnum.GAME]: <GameCanvas innerRef={canvasRef} />,
          }[state]
        }
      </div>
      <div className={styles.game__footer}>
        <div className={styles.game__control}>
          <Tooltip title={<GameControl />}>
            <Gamepad color={'primary'} />
          </Tooltip>
          {state === gameStateEnum.GAME && (
            <ResizeButton canvasRef={canvasRef} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
