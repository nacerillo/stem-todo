import React, {useState} from "react";
import { Todo, ToggleComplete ,DeleteTodo, UpdateTodo } from "./types";
import { TodoListItem } from "./TodoListItem";
import { DragDropContext } from 'react-beautiful-dnd';
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
}


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
      {todos.map((todo) => (
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
