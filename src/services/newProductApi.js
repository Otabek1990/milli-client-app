import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const newProductApi = createApi({
  reducerPath: "newProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["NewProduct"],
  endpoints: (builder) => ({
    newProducts: builder.query({
      query: () => ({
        url: "api/v1/product/new/",
      }),
      providesTags: ["NewProduct"],
    }),
  }),
});

export const {
  useNewProductsQuery,

} = newProductApi;
