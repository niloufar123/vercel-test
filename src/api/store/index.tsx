import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "../Api";
import loadingSlice, { setLoading } from "../slice/loadingSlice";

export const store = configureStore({
  
  reducer: {
    [api.reducerPath]: api.reducer,
    loading:loadingSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>

