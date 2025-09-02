import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ task: action.payload, completed: false });
    },
    markcompleted: (state, action) => {
      console.log("action.payload", action);
      console.log("stat.todos before:", state);
      state.todos[action.payload].completed = true;
    },
    deleteTodo: (state, action) => {
      console.log("action.payload", action);
      console.log("stat.todos before:", state);
    },
  },
});

export const { addTodo, markcompleted, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
