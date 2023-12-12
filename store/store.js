import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./middleWares/categoriesApi";
import { productsApi } from "./middleWares/productsApi";
import burgerReducer from "./slices/BurgerSlice";
import navSliceReducer from "./slices/navSlice";
import categoryIdReducer from "./slices/categoryIdSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		[categoryApi.reducerPath]: categoryApi.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
		burger: burgerReducer,
		nav: navSliceReducer,
		categoryId: categoryIdReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			categoryApi.middleware,
			productsApi.middleware,
		]),
});
