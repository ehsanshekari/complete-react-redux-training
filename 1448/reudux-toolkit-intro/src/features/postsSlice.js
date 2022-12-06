import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// DO NOT USE IT ANYMORE
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
    status: null
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.state = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state, action) => {
      state.data = action.error.message;
      state.status = 'failed';
    }
  }
})

export default postsSlice.reducer;