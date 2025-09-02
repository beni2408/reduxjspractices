import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slice/themeSlice";
import todoReducer from "../Slice/TodoSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
});

export default store;
