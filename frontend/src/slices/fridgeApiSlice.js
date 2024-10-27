import { FRIDGE_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const fridgeApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createFridge: builder.mutation({
      query: data => ({
        url: `${FRIDGE_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    getUserFridge: builder.query({
      query: () => ({
        url: `${FRIDGE_URL}`,
        method: 'GET',
      }),
    }),
    
  }),
});

export const { useCreateFridgeMutation } = fridgeApiSlice;
