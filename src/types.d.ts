export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

//export type OnSortEnd = ()
export type DeleteTodo = (todoToRemove: Todo) => void; 

export type AddTodo = (newTodo: string) => void;

export type UpdateTodo = (newTodo: Todo) => void;
