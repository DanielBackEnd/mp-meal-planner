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
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
    searchProductsByTerm: builder.query({
      query: searchTerm => ({
        url: `${PRODUCTS_URL}/search`,
        method: 'GET',
        params: { query: searchTerm },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useSearchProductsByTermQuery,
} = productApiSlice;
