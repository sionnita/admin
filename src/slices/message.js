import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
    setLoading: (state, action)  => {
      return {loading:action.payload}
    }
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage, setLoading } = actions
export default reducer;