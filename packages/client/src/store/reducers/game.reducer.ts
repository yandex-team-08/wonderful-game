import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { EGameStatus } from '../../enums/gameStatus.enum';
import { IGame } from '../../types/game.interface';

const initialState: IGame = {
  status: EGameStatus.START,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setStatus: (state: IGame, action: PayloadAction<EGameStatus>) => {
      state.status = action.payload;
    },
    setScore: (state: IGame, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

export const { setStatus, setScore } = gameSlice.actions;

export default gameSlice.reducer;
