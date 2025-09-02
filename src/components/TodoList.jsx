import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { markcompleted } from "../Slice/TodoSlice";

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
      {todos.map((todo, index) => (
        <p
          style={{
            background: "green",
            padding: "10px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            width: "150px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          key={index}
          onClick={() => {
            dispatch(markcompleted(index));
          }}
        >
          {todo.task}
        </p>
      ))}
    </div>
  );
};
export default TodoList;
