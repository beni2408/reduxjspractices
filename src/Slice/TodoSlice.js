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
    toggleComplete: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
