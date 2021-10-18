import { DropResult } from "react-beautiful-dnd";

export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;
export type DeleteTodo = (todoToRemove: Todo) => void; 
export type AddTodo = (newTodo: string) => void;
export type OnDragEnd = (result: DropResult) => void;
export type UpdateTodo = (newTodo: Todo) => void;
