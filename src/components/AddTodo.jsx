import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slice/TodoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addTodo(text));
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
