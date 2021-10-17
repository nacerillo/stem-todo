import React from "react";
import { Todo, ToggleComplete, DeleteTodo, UpdateTodo } from "./types";
//import { SortableElement} from 'react-sortable-hoc';
import "./TodoListItem.css";
import EditTodoModal from "./EditTodoModal";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
}

/*const SortableItem = SortableElement(({todo}) => <li className = 'm-1 list-group-item'>
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

    </li>);*/
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  updateTodo
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
        <EditTodoModal updateTodo = {updateTodo} selectedTodo = {todo}/>
        <button type="button"  className = "btn m-1 btn-danger" onClick={() => deleteTodo(todo)}>delete</button>
      </span>

    </li>
  );
};
