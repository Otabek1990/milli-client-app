import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    products: builder.query({
      query: (productId) => ({
        url: `api/v1/product/${productId}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useProductsQuery,

} = productApi;
//api/v1/product/all-categories/
