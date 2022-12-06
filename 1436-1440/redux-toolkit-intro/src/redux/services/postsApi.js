import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts']
    }),

    post: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ['Posts']
    }),

    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Posts']      
    }),

    updatePost: builder.mutation({
      query: ({ id, ...newData }) => {
        return {
          url: `/posts/${id}`,
          method: 'PATCH',
          body: newData,
        };
      },
    }),

    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
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
