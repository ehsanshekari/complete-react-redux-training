import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (limit, { dispatch, getState }) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log('fetchPosts.rejected > action', action);
      state.status = 'error';
      state.data = action.error.message;
    },
  },
});

export default postsSlice.reducer;
