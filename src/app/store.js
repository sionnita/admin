import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import menuReducer from "../slices/menu";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  menu:menuReducer
}

export default configureStore({
  reducer: reducer,
  devTools: true,
});