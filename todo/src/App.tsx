import React from 'react';
import Navbar from "./components/navbar";
import TodoForm from "./components/todo_form";
import TodoList from "./components/todo_list";
import './App.css';


function App() {
  return (
      <div>
        <Navbar/>
        <TodoForm/>
        <TodoList/>
      </div>
  );
}

export default App;
