import React from "react";
import { Todo, ToggleComplete, DeleteTodo } from "./types";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      <button type="button" className = "btn btn-primary" >edit</button>
        <button type="button" className = "btn btn-danger" onClick={() => deleteTodo(todo)}>delete</button>
      
    </li>
  );
};
