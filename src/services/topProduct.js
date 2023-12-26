import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const topProductApi = createApi({
  reducerPath: "topProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["TopProduct"],
  endpoints: (builder) => ({
    topProducts: builder.query({
      query: () => ({
        url: "api/v1/product/top/",
      }),
      providesTags: ["TopProduct"],
    }),
  }),
});

export const {
  useTopProductsQuery,

} = topProductApi;
