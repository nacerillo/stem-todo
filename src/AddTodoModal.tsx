import React, { useState,ChangeEvent, FormEvent  } from "react";
import Modal from 'react-bootstrap/Modal';
import { AddTodo } from "./types";
interface AddTodoFormProps {
  addTodo: AddTodo;
}
const AddTodoModal: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [show, setShow] = useState<Boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    handleClose();
  };
  return (
    <React.Fragment>
      <div>
         <h2 className = "text-center">Current Tasks</h2>
         <button className="btn btn-block btn-primary" onClick = {handleShow}>Add Item</button>
      </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task Item</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group">
                    <input type = "text" className="form-control" id="addItem" value = {newTodo} onChange={handleChange} placeholder="Write Here"/>
                    <small className="form-text text-muted">Write a new task in the field above. Then click the Update to add it to the list</small>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddTodoModal;
