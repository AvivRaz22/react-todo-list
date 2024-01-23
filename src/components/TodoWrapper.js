import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import "../stylesheets/TodoWrapper.css";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: uuidv4(), text: text, isCompleted: false, isEditing: false },
    ]);
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  const toggleEditingTodo = (todoID) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoID ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const toggleCompletedTodo = (todoID) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoID ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const setTodoText = (todoID, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoID ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm
            key={index}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            isEditing={todo.isEditing}
            setTodoText={setTodoText}
          />
        ) : (
          <Todo
            key={index}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            isEditing={todo.isEditing}
            deleteTodo={deleteTodo}
            editTodo={toggleEditingTodo}
            toggleCompletedTodo={toggleCompletedTodo}
          />
        )
      )}
    </div>
  );
};
