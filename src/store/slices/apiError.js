import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  message: "",
};

const apiError = createSlice({
  name: "apiError",
  initialState,
  reducers: {
    setErrorStatus: (state, { payload }) => {
      state.status = payload;
    },
    setErrorMessage: (state, { payload }) => {
      state.message = payload;
    },
    setErrorClear: (state) => {
      state.status = null;
    },
  },
});

export const { setErrorStatus, setErrorMessage, setErrorClear } =
  apiError.actions;

export default apiError.reducer;
