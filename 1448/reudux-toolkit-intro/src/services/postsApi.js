import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    // FETCH ALL POST
    posts: builder.query({
      query: () => `/posts`,
      providesTags: ['Posts'],
    }),

    // FETCH POST BY ID
    post: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ['Posts'],
    }),

    // CREATE A NEW POST
    addPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),

    // UPDATE A POST
    updatePost: builder.mutation({
      query: ({ id, ...newPostData }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: newPostData,
      }),
      invalidatesTags: ['Posts'],
    }),

    // DELETE A POST
    deletePost: builder.mutation({
      query: (data) => ({
        url: `/posts/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
