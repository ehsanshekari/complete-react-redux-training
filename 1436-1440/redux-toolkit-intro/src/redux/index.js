import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import postsReducers from './features/postsSlice';
import { postsApi } from './services/postsApi';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducers,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
