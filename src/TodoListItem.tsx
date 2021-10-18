import React from "react";
import { Todo, ToggleComplete, DeleteTodo, UpdateTodo } from "./types";
//import { SortableElement} from 'react-sortable-hoc';
import "./TodoListItem.css";
import EditTodoModal from "./EditTodoModal";
import {Draggable} from 'react-beautiful-dnd';
interface TodoListItemProps {
  todo: Todo;
  index: number;
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
  index,
  toggleComplete,
  deleteTodo,
  updateTodo
}) => {

  return (
    <Draggable key={todo.text} draggableId={todo.text} index={index}>
      {(provided) =>(
    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className = {todo.complete ? "m-1 list-group-item list-group-item-warning" : "m-1 list-group-item list-group-item-primary"} >
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
       {todo.text}
    
      <span>
        <EditTodoModal updateTodo = {updateTodo} selectedTodo = {todo}/>
        <button type="button"  className = "btnitem btn m-1 btn-danger" onClick={() => deleteTodo(todo)}>Delete</button>
      </span>
    </li>
    )}
    </Draggable>
    
  );
};
