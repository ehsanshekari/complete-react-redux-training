import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    // FETCH ALL POSTS
    posts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts']
    }),

    // FETCH ONE POST
    post: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ['Posts']
    }),

    // CREATE A POST
    addPost: builder.mutation({
      query: (data) => {
        return {
          url: '/posts',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Posts']
    }),

    // UPDATE A POST
    updatePost: builder.mutation({
      query: ({id, ...newPostData}) => {
        return {
          url: `/posts/${id}`,
          method: 'PATCH',
          body: newPostData,
        };
      },
      invalidatesTags: ['Posts']
    }),

    // DELETE A POST
    deletePost: builder.mutation({
      query: ({id}) => {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Posts']
    }),

  }),
});

export const { usePostsQuery, usePostQuery, useAddPostMutation, useDeletePostMutation } = postsApi;
