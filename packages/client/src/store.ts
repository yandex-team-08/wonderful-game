import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './reducers/game.reducer';

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
