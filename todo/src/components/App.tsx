import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./AddTodo";

const App = () => {
  return (
    <TodoContext>
      <BrowserRouter>
        <Navbar></Navbar>
        <br />
        <div className='uk-container'>
          <Routes>
            <Route path="/create" element={<AddTodo></AddTodo>} />
            <Route path="/" element={<TodoList></TodoList>} />
          </Routes>
        </div>
      </BrowserRouter>
    </TodoContext>
  );
};

export default App;
