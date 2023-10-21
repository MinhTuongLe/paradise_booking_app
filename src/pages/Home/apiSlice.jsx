/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MODULE_NAME = "places";
const PARAMS_KEY = "id";

const endpoints = {
  index: {
    endpoint: `/${MODULE_NAME}`,
  },
};

const placeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),
  endpoints: (builder) => ({
    getIndexPlace: builder.query({
      query: (params) => ({
        url: "/places",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetIndexPlaceQuery } = placeApi;

export default placeApi;
