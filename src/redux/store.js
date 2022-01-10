import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { loginReducer } from "./loginReducer";

const store = configureStore({
  reducer: reducer,
  login: loginReducer,
});

export default store;
