import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: 'GET',
      }),
    }),
    addNewProduct: builder.mutation({
      query: data => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddNewProductMutation } =
  productApiSlice;
