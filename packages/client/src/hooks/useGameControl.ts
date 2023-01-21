import { GameEndEvent } from '@src/game_modules/types';
import { useAppDispatch } from '@src/hooks/useAppDispatch';
import { setScore } from '@src/store/reducers/game.reducer';

export const useGameControl = (): { handleEndOfGame: (e: GameEndEvent) => void } => {
    const dispatch = useAppDispatch();

    const handleEndOfGame = (e: GameEndEvent) => {
        dispatch(setScore(e.gameScore));
    };

    return {
        handleEndOfGame,
    };
};
