import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counterSlice';
import postsReducer from '../features/postsSlice';
import { postsApi } from '../services/postsApi';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
