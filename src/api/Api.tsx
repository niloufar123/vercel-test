import { createApi } from "@reduxjs/toolkit/query/react";
import {baseQuery } from "./baseQuery";


export const api = createApi({
  baseQuery,
  reducerPath: "RTKApi",
  endpoints: (build) => ({
    getServices: build.query({
      query: (url) => ({ url }),
    }),
    postServies: build.mutation({
      query(params) {
        console.log('params',params)
        return {
          url: params.url,
          method: 'POST',
          body:params.body,
        }
      },
  })
  }),

});




export const { useGetServicesQuery  ,usePostServiesMutation} = api;
