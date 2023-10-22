import { configureStore } from "@reduxjs/toolkit";
import placeApi from "../../pages/Home/apiSlice";

const store = configureStore({
  reducer: {
    [placeApi.reducerPath]: placeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placeApi.middleware),
});

export default store;
