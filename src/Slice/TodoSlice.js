import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: ["Buy Groceries", "Read Book", "Write "],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("action.payload", action);
      console.log("stat.todos before:", state);
    },
    markcompleted: (state, action) => {
      console.log("action.payload", action);
      console.log("stat.todos before:", state);
    },
    deleteTodo: (state, action) => {
      console.log("action.payload", action);
      console.log("stat.todos before:", state);
    },
  },
});

// export const { addTodo, markcompleted, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
