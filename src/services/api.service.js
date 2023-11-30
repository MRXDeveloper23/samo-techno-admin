import { appConfig } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("crm_token")}`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
});

// export const {

// } = apiService;
