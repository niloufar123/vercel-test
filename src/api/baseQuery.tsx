import { BaseQueryApi, BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { setLoading } from "./slice/loadingSlice";

let apiEndpoint = "http://localhost:3001";

const baseQueryHeaders = fetchBaseQuery({
  baseUrl: apiEndpoint,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",

    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Credentials": "true",
    'Content-Type': 'application/json',
  },
  prepareHeaders: (headers) => {
    return headers;
  },
})



export const baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}) => {

  api.dispatch(setLoading(true))

    let queryRes = await baseQueryHeaders(args, api, extraOptions)
    if (queryRes.meta?.response?.status == 200) api.dispatch(setLoading(false))
    console.log('queryRes.meta?.response',queryRes.meta?.response)
    return queryRes

 

  // let queryRes = await baseQueryHeaders(args, api, extraOptions)
  // console.log('queryRes.meta?.response',queryRes.meta?.response)

}


