import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../apis/auth";

const initialState = {
	accessToken: null,
	refreshToken: null,
	isAuthenticated: false,
	loading: false,
	user: null,
};

export const login = createAsyncThunk(
	"user/Login",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await authApi.login({ email, password });
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response.data?.errorMessage || "Something went wrong!"
			);
		}
	}
);
export const register = createAsyncThunk(
	"user/Register",
	async (
		{ username, password, email, fullName, phoneNumber },
		{ rejectWithValue }
	) => {
		try {
			const response = await authApi.register({
				username,
				password,
				email,
				fullName,
				phoneNumber,
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response.data?.errorMessage || "Something went wrong!"
			);
		}
	}
);
export const changePassword = createAsyncThunk(
	"user/ChangePassword",
	async ({ userId, newPassword }, { rejectWithValue }) => {
		try {
			const response = await authApi.changePassword({
				userId,
				newPassword,
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response.data?.errorMessage || "Something went wrong!"
			);
		}
	}
);
export const verifyEmail = createAsyncThunk(
	"user/VerifyEmail",
	async ({ userId, accessToken }, { rejectWithValue }) => {
		try {
			const response = await authApi.verifyEmail({ userId, accessToken });
			return response.data;
		} catch (error) {
			return rejectWithValue(
				error.response.data?.errorMessage || "Something went wrong!"
			);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.isAuthenticated = false;
			state.accessToken = null;
			state.user = null;
			localStorage.removeItem("accessToken");
			localStorage.removeItem("user");
		},
		loginVerified(state, action) {
			const { accessToken, user } = action.payload;
			state.isAuthenticated = true;
			state.accessToken = accessToken;
			state.user = user;
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.rejected]: (state) => {
			state.loading = false;
		},
		[login.fulfilled]: (state, action) => {
			const { user, token } = action.payload.data;
			state.user = user;
			state.loading = false;

			state.accessToken = token;
			state.isAuthenticated = true;

			localStorage.setItem("accessToken", token);
			localStorage.setItem("user", JSON.stringify(user));
		},
		[register.pending]: (state) => {
			state.loading = true;
		},
		[register.rejected]: (state) => {
			state.loading = false;
		},
		[register.fulfilled]: (state) => {
			state.loading = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
