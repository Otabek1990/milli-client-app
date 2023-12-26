import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Banner"],
  endpoints: (builder) => ({
    banners: builder.query({
      query: () => ({
        url: "api/v1/product/main-banner/",
      }),
      providesTags: ["Banner"],
    }),
  }),
});

export const {
  useBannersQuery,

} = bannerApi;
