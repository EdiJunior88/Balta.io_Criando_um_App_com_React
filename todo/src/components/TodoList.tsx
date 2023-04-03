import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "Ir ao supermercado", done: false },
    { id: 2, title: "Ir a academia", done: false },
  ];

  return (
    <div>
      <table className='uk-table'>
        <caption>Lista de Tarefas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {todos?.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
