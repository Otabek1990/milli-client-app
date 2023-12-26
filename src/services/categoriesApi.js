// https://fast.milli.uz/categories/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => ({
        url: "api/v1/product/all-categories/",
      }),
      providesTags: ["Categories"],
    }),
    categoryItemDetails: builder.query({
      query: (id) => ({
        url: `api/v1/product/?category_id=${id}`,
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
    filterSidebarDetails: builder.query({
      query: (id) => ({
        url: `api/v1/product/side-bar/?category_id=${id}`,
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryItemDetailsQuery,
  useFilterSidebarDetailsQuery,
} = categoriesApi;
