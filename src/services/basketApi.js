import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    basket: builder.query({
      query: () => ({
        url: "api/v1/product/cart/",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      providesTags: ["Basket"],
    }),
    ordersHistory: builder.query({
      query: () => ({
        url: "api/v1/order/",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      providesTags: ["Basket"],
    }),
    basketDetail: builder.query({
      query: (basketId) => ({
        url: `api/v1/product/cart/${basketId}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      providesTags: ["Basket"],
    }),
    addToBasket: builder.mutation({
      query: ({basketItem, access}) => ({
        url: "api/v1/product/cart/",
        method: "POST",
        body: basketItem,
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
      invalidatesTags: ["Basket"],
    }),
    order: builder.mutation({
      query: ({orderItem, access}) => ({
        url: "api/v1/order/",
        method: "POST",
        body: orderItem,
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }),
      invalidatesTags: ["Basket"],
    }),
    updateBasket: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `api/v1/product/cart/${id}/`,
        method: "PATCH",
        body: rest,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      invalidatesTags: ["Basket"],
    }),
    deleteBasket: builder.mutation({
      query: (id) => ({
        url: `api/v1/product/cart/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      invalidatesTags: ["Basket"],
    }),
    deleteSelectedItemsFromBasket: builder.mutation({
      query: (carts_id) => ({
        url: `api/v1/product/cart/many-delete/`,
        method: "DELETE",
        body:carts_id,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access-token")
          )}`,
        },
      }),
      invalidatesTags: ["Basket"],
    }),

  }),
});

export const {

  useBasketQuery,
  useBasketDetailQuery,
  useAddToBasketMutation,
  useOrdersHistoryQuery,
  useOrderMutation,
  useUpdateBasketMutation,
  useDeleteBasketMutation,
  useDeleteSelectedItemsFromBasketMutation,
} = basketApi;
