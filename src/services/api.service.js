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
      headers.set("ngrok-skip-browser-warning", true);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/v1/categories/all",
      }),
    }),
    getProductGroups: builder.query({
      query: (parentId) => ({
        url: `/v1/products/${parentId}/all`,
      }),
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        method: "POST",
        url: "/v1/categories/add",
        body: category,
      }),
    }),
    createSection: builder.mutation({
      query: ({ categoryId, section }) => ({
        url: "/v1/categories/add/type",
        method: "POST",
        params: {
          categoryId,
        },
        body: section,
      }),
    }),
    getSectionGroups: builder.query({
      query: (parentId) => ({
        url: `/v1/categories/group/${parentId}`,
      }),
    }),
    createGroup: builder.mutation({
      query: ({ categoryId, group }) => ({
        url: "/v1/categories/add/group",
        method: "POST",
        params: {
          categoryId,
        },
        body: group,
      }),
    }),
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/v1/products/add",
        method: "POST",
        body: payload,
      }),
    }),
    getPieChartStats: builder.query({
      query: (params) => ({
        url: `/v1/statistics/pie-chart`,
        params,
      }),
    }),
    getCardListStats: builder.query({
      query: () => ({
        url: "/v1/statistics/card-list",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useLazyGetProductGroupsQuery,
  useCreateCategoryMutation,
  useCreateSectionMutation,
  useLazyGetSectionGroupsQuery,
  useCreateGroupMutation,
  useCreateProductMutation,
  useGetPieChartStatsQuery,
  useGetCardListStatsQuery,
} = apiService;
