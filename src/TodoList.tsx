import React from "react";
import { Todo, ToggleComplete ,DeleteTodo } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteTodo
}) => {
  return (
    <React.Fragment>
    <h2>Current List</h2>
    <ul className = 'list-group'>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo = {deleteTodo}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};
