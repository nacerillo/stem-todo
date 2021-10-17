import React, { useState,ChangeEvent, FormEvent  } from "react";
import Modal from 'react-bootstrap/Modal';

import { Todo, UpdateTodo } from "./types";
interface EditTodoFormProps {
  updateTodo: UpdateTodo;
  selectedTodo: Todo;
}
const EditTodoModal: React.FC<EditTodoFormProps> = ({ updateTodo, selectedTodo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pickedTodo, changeTodo] = useState<Todo>(selectedTodo);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       changeTodo({...pickedTodo, text: e.target.value});
    //(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(pickedTodo);
    updateTodo(pickedTodo);
    handleClose();
  };
  return (
    <React.Fragment>
    <button className="btn m-1 btn-primary" onClick = {handleShow}>Edit</button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Current Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group">
                    <input type = "text" className="form-control" name = "text" id="changeItem"  placeholder = {selectedTodo.text} onChange={handleChange} required/>
                    <small className="form-text text-muted">update your task with a new item</small>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </Modal.Body>
      </Modal>
  
    </React.Fragment>
  );
};

export default EditTodoModal;