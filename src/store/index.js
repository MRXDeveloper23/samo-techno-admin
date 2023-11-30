import { errorMiddleware } from "@/services/errorMiddleware";
import { kassaApiService } from "@/services/api.service";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "./slices/authSlice";
import apiErrorReducer from "./slices/apiError";

export const store = configureStore({
  reducer: {
    [kassaApiService.reducerPath]: kassaApiService.reducer,
    auth: authReducer,
    apiError: apiErrorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(kassaApiService.middleware)
      .concat(errorMiddleware),
});

setupListeners(store.dispatch);
