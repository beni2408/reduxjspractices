import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // addTodo: (state, action) => {},
    // markcompleted: (state, action) => {},
    // deleteTodo: (state, action) => {},
  },
});

// export const { addTodo, markcompleted, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
