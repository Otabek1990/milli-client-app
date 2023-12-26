import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const topCategoryApi = createApi({
  reducerPath: "topCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["TopCategory"],
  endpoints: (builder) => ({
    topCategories: builder.query({
      query: () => ({
        url: "api/v1/product/top-category/",
      }),
      providesTags: ["TopCategory"],
    }),
  }),
});

export const {
  useTopCategoriesQuery,

} = topCategoryApi;
