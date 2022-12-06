import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface SerialData {
  id: number;
  image?: {
    original: string;
    medium: string;
  };
  summary: string;
  name: string;
  language: string;
  genres: string[];
  webChannel: {
    name: string;
  };
}

export interface Serial {
  show: SerialData;
  score: number;
}

export const serialApi = createApi({
  reducerPath: 'serialApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.tvmaze.com/' }),
  endpoints: (builder) => ({
    getSerials: builder.query<Serial[], string>({
      query: (term) => `search/shows?q=${term}`,
    }),
  }),
});

export const {useGetSerialsQuery} = serialApi;
