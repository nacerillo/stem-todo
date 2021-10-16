import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form>
      <div className="form-group">
        <h2>Add To List</h2>
        <input type = "text" className="form-control" id="addItem" value = {newTodo} onChange={handleChange} placeholder="Write Here"/>
        <small className="form-text text-muted">write a new task in the text field above. Then click the button to add it to the list</small>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
  </div>
  </form>
  );
};
