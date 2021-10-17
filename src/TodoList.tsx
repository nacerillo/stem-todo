import React, {useState} from "react";
import { Todo, ToggleComplete ,DeleteTodo, UpdateTodo } from "./types";
import { TodoListItem } from "./TodoListItem";
import { ReactSortable, Sortable } from "react-sortablejs";


interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
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
  deleteTodo,
  updateTodo
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
          updateTodo = {updateTodo}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};
