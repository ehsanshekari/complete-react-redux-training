import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (limit, { dispatch, getState }) => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return result.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state, {error}) => {
      state.data = error.message;
      state.status = 'failed';
    },
  },
});

export default postsSlice.reducer;
