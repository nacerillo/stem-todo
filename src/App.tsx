import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import Button from 'react-bootstrap/Button';
import { Todo, ToggleComplete, AddTodo, DeleteTodo } from "./types";
import {Navbar} from "./Navbar";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };


  
  const deleteTodo: DeleteTodo = todoToRemove => {
    const updatedTodos = todos.filter(todo => todo !== todoToRemove);
    setTodos(updatedTodos);
  }
  

  return (
    <React.Fragment>
    <Navbar/>

   <Button variant="primary">Button #1</Button>
    <div className = 'row gx-4'>
      <div className = 'col'>
        
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo = {deleteTodo}/>
      </div>
      <div className = 'col'>
      <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
    </React.Fragment>
  );
};

export default App;
