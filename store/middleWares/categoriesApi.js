import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
	reducerPath: "categoryApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.minzifashop.com/v1/",
	}),
	endpoints: (build) => ({
		getAllCategories: build.query({
			query: () => "categories?page=1&page_size=100",
		}),
		addCategory: build.mutation({
			query: (payload) => ({
				url: "categories",
				method: "POST",
				body: payload,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const { useGetAllCategoriesQuery, useAddCategoryMutation } = categoryApi;
