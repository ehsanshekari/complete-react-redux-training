import { configureStore } from '@reduxjs/toolkit';

import { serialApi } from '../services/serialApi';

export default configureStore({
  reducer: {
    [serialApi.reducerPath]: serialApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serialApi.middleware),
});
