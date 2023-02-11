import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth.reducer';
import gameReducer from './reducers/game.reducer';
import leadersReducer from './reducers/leaders.reducer';
import profileReducer from './reducers/profile.reducer';

const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authReducer,
    leaders: leadersReducer,
    forum: forumReducer,
    profile: profileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
