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
    addProductToFridge: builder.mutation({
      query: data => ({
        url: `${FRIDGE_URL}/add`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProductFromFridge: builder.mutation({
      query: data => ({
        url: `${FRIDGE_URL}/delete`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateFridgeMutation,
  useGetUserFridgeQuery,
  useAddProductToFridgeMutation,
  useDeleteProductFromFridgeMutation,
} = fridgeApiSlice;
