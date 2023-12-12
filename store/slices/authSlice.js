import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "admin123",
	password: "admin123",
	value: false,
	status: false,
};
export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		getAuth: (state, action) => {
			if (
				state.email == action.payload.email &&
				state.password == action.payload.password
			) {
				state.value = true
				state.status = true
			} else {
				state.value = false;
				state.status = false
			}
		},
		removeAuth: (state) => {
			state.value = false
		}
	},
});

export const { getAuth,removeAuth } = authSlice.actions;
export default authSlice.reducer;
