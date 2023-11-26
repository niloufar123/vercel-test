import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {baseQuery } from "./baseQuery";


export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  
  reducerPath: "RTKApi",
  endpoints: (builder) => ({
    getPatientList: builder.query({
      query: (name) => `photos`,
    }),
  }),
  

});




export const {useGetPatientListQuery}= api;
