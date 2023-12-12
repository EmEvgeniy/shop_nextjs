import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.minzifashop.com/v1/",
	}),
	endpoints: (build) => ({
		getAllProductsByCategoryId: build.query({
			query: () => `products`,
		}),
	}),
});

export const { useGetAllProductsByCategoryIdQuery } = productsApi;
