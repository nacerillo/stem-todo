import React, {useState} from "react";
import { Todo, ToggleComplete ,DeleteTodo } from "./types";
import { TodoListItem } from "./TodoListItem";
import { ReactSortable, Sortable } from "react-sortablejs";


interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}
/*
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
*/
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
