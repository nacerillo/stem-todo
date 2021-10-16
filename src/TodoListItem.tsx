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
    <li className = 'm-1 list-group-item'>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
       {todo.text}
      </label>
      <span>
        <button type="button"  className = "btn m-1 btn-primary" >edit</button>
        <button type="button"  className = "btn m-1 btn-danger" onClick={() => deleteTodo(todo)}>delete</button>
      </span>

    </li>
  );
};
