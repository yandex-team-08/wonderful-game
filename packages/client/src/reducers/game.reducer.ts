import { createSlice } from '@reduxjs/toolkit';

import { gameStateEnum } from '../enums/gameState.enum';
import { gameInterface } from '../types/game.interface';

export const gameSlice = createSlice({
  name: 'counter',
  initialState: {
    status: gameStateEnum.START,
  },
  reducers: {
    start: (state: gameInterface) => {
      state.status = gameStateEnum.START;
    },
    loading: (state: gameInterface) => {
      state.status = gameStateEnum.LOADING;
    },
    play: (state: gameInterface) => {
      state.status = gameStateEnum.PLAY;
    },
  },
});

export const { start, loading, play } = gameSlice.actions;

export default gameSlice.reducer;
