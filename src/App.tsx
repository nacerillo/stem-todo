import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { Todo, ToggleComplete, AddTodo } from "./types";
import {Navbar} from "./Navbar";
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

  return (
    <React.Fragment>
    <Navbar/>
    <div className = 'row gx-4'>
      <div className = 'col'>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      </div>
      <div className = 'col'>
      <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
    </React.Fragment>
  );
};

export default App;
