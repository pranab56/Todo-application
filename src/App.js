import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Todos from "./component/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleTodos = (todo) => {
    setTodos((oldTodo) => {
      return [...oldTodo, { id: uuidv4(), todo }];
    });
  };

  const handleDelete = (id) => {
    const filter = todos.filter((todo) => todo.id !== id);
    setTodos(filter);
  };

  return (
    <div>
      <h3 className="text-center text-3xl p-2">Todo Application✔</h3>
      <hr />
      <hr />
      <Todos
        todos={todos}
        handleTodos={handleTodos}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
