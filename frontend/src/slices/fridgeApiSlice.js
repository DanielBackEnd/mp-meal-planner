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
  }),
});

export const { useCreateFridgeMutation } = fridgeApiSlice;
