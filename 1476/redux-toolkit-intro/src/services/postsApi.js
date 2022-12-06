import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    // FETCH ALL POSTS
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts']
    }),

    // FETCH ONE POST
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ['Posts']
    }),

    // CREATE A POST
    addPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags:['Posts']
    }),

    // UPDATE A POST
    updatePost: builder.mutation({
      query: ({ id, ...newData }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags:['Posts']
    }),

    // DELETE A POST
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Posts']
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
