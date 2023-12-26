import { configureStore } from "@reduxjs/toolkit";
import { bannerApi } from "../services/bannerApi";
import { topProductApi } from "../services/topProduct";
import { topCategoryApi } from "../services/topCategoryApi";
import { adsProductApi } from "../services/adsProduct";
import { categoriesApi } from "../services/categoriesApi";
import { newProductApi } from "../services/newProductApi";
import { productApi } from "../services/productApi";
import { basketApi } from "../services/basketApi";

const combinedReducer = {
  [bannerApi.reducerPath]: bannerApi.reducer,
  [topProductApi.reducerPath]: topProductApi.reducer,
  [adsProductApi.reducerPath]: adsProductApi.reducer,
  [topCategoryApi.reducerPath]: topCategoryApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [newProductApi.reducerPath]: newProductApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [basketApi.reducerPath]: basketApi.reducer,
};

export default configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      topProductApi.middleware,
      adsProductApi.middleware,
      topCategoryApi.middleware,
      categoriesApi.middleware,
      newProductApi.middleware,
      productApi.middleware,
      basketApi.middleware,
    ),
});
