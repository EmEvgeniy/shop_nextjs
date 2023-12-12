import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
	value2: null,
};

export const categoryIdSlice = createSlice({
	name: "categoryIdSlice",
	initialState,
	reducers: {
		getCategoryId: (state, action) => {
			state.value = action.payload;
		},
		getCategoryId2: (state, action) => {
			state.value2 = action.payload;
		},
	},
});

export const { getCategoryId, getCategoryId2 } = categoryIdSlice.actions;
export default categoryIdSlice.reducer;
