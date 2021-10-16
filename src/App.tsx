import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Todo, ToggleComplete, AddTodo, DeleteTodo } from "./types";
import {Navbar} from "./Navbar";
import AddTodoModal from "./AddTodoModal";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

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

   
    <div className = 'addItem row'>
      <div className = 'col-6'>
        <AddTodoModal addTodo = {addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo = {deleteTodo}/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default App;
