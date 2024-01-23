import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const submit = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <div className="MainForm Form">
      <input
        type="text"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>Add Task</button>
    </div>
  );
};
