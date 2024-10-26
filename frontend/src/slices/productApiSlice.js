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
  }),
});

export const { useGetAllProductsQuery } = productApiSlice;
