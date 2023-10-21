/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HTTP_METHOD } from "../../services/axiosHelper";

const MODULE_NAME = "places";
const PARAMS_KEY = ":id";

const endpoints = {
  index: {
    endpoint: `/${MODULE_NAME}`,
  },
  getById: {
    endpoint: `/${MODULE_NAME}/${PARAMS_KEY}`,
  },
  create: {
    endpoint: `/${MODULE_NAME}/?location_id=1`,
  },
};

const placeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081/api/v1",
  }),
  endpoints: (builder) => ({
    getIndexPlace: builder.query({
      query: (params) => ({
        url: endpoints.index.endpoint,
        method: HTTP_METHOD.GET,
        params,
      }),
    }),
    getPlaceById: builder.query({
      query: ({ id, params }) => ({
        url: endpoints.getById.endpoint.replace(PARAMS_KEY, id),
        method: HTTP_METHOD.GET,
        params,
      }),
    }),
    createPlace: builder.mutation({
      query: (place) => {
        return {
          url: endpoints.create.endpoint,
          method: HTTP_METHOD.POST,
          data: place,
        };
      },
    }),
  }),
});

export const {
  useGetIndexPlaceQuery,
  useGetPlaceByIdQuery,
  useCreatePlaceMutation,
} = placeApi;

export default placeApi;
