import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./Slice/themeSlice";

const App = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);
  const { todos } = useSelector((state) => state.todo);

  return (
    <>
      <div
        style={{
          background: mode === "light" ? "white" : "black",
          color: mode === "light" ? "black" : "white",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1> Current Theme:{mode}</h1>
        <button
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {mode === "light" ? "🌗" : "☀️"}
        </button>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </>
  );
};

export default App;
