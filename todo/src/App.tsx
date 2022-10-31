import React from 'react';
import Navbar from "./components/navbar";
import TodoForm from "./components/todo_form";
import TodoList from "./components/todo_list";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from "./components/filters";


function App() {
  return (
      <div>
          <BrowserRouter>
              <Navbar/>
              <TodoForm/>
              <Filters/>
              <Routes>
                  <Route path={'/'} element={<TodoList type={'all'}/>}/>
                  <Route path={'/active'} element={<TodoList type={'active'}/>}/>
                  <Route path={'/completed'} element={<TodoList type={'completed'}/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
