import React from "react";
import { Todo, ToggleComplete ,DeleteTodo, UpdateTodo, OnDragEnd } from "./types";
import { TodoListItem } from "./TodoListItem";
import { DragDropContext, Droppable, Draggable, DropResult} from 'react-beautiful-dnd';
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
  handleOnDragEnd: OnDragEnd;
}


export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteTodo,
  updateTodo,
  handleOnDragEnd
}) => {

  return (
    <React.Fragment>
      <DragDropContext onDragEnd = {handleOnDragEnd}>
        <Droppable droppableId = 'list-group'>
          {(provided) => (
            <ul className = 'list-group' {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <TodoListItem
                  key={todo.text}
                  index = {index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo = {deleteTodo}
                  updateTodo = {updateTodo}
               />
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
};
