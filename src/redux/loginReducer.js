import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "login",
  initialState: {
    user: null,
    selectedImage: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },
  },
});

export const { login, logout, selectImage, resetImage } = loginReducer.actions;
export const selectUser = (state) => state.login.user;
export const selectSelectedImage = (state) => state.login.selectedImage;

export default loginReducer.reducer;
