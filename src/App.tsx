import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { Todo, ToggleComplete, AddTodo, DeleteTodo, UpdateTodo } from "./types";
import {Navbar} from "./Navbar";
import AddTodoModal from "./AddTodoModal";
import "./App.css";
import {SortableContainer, arrayMove} from 'react-sortable-hoc';
//import {arrayMove as arraymove} from 'array-move';



const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map<Todo>(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, {id:todos.length+=1, text: newTodo, complete: false }]);
  };

  
  const updateTodo: UpdateTodo = selectedTodo => {

    const updatedTodos = todos.map<Todo>(todo => {
      if (todo.id === selectedTodo.id){
        return { ...todo, text: selectedTodo.text };
      }
      return todo;
    });
    
    setTodos(updatedTodos);

  }
  
  
  const deleteTodo: DeleteTodo = todoToRemove => {
    const updatedTodos = todos.filter(todo => todo !== todoToRemove);
    setTodos(updatedTodos);
  }      
//<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo = {deleteTodo}/>
  return (
    <React.Fragment>
    <Navbar/>
    <div className = 'todo-list'>
      <div>
      <AddTodoModal addTodo = {addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default App;
