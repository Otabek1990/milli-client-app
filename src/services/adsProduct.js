import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const adsProductApi = createApi({
  reducerPath: "adsProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["AdsProduct"],
  endpoints: (builder) => ({
    adsProducts: builder.query({
      query: () => ({
        url: "api/v1/product/ads/",
      }),
      providesTags: ["AdsProduct"],
    }),
  }),
});

export const {
  useAdsProductsQuery,

} = adsProductApi;
