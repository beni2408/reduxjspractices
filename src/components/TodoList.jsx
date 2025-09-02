import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../Slice/TodoSlice";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        background: "lightgray",
        border: "1px solid black",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        borderRadius: "10px",
        width: "50%",
        margin: "auto",
        marginTop: "20px",
        height: "100vh",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        Todo List
      </h1>
      {todos.map((todo, index) => (
        <p
          style={{
            fontSize: "50px",
            background: "green",
            padding: "10px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            width: "250px",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          key={index}
          onClick={() => {
            dispatch(toggleComplete(index));
          }}
        >
          {todo.task}
          <div
            style={{
              width: "120px",
              height: "20px",

              background: todo.completed ? "green" : "red",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "20px",

              marginLeft: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(deleteTodo(index));
            }}
          >
            ␡
          </div>
        </p>
      ))}
    </div>
  );
};
export default TodoList;
