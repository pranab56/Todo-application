import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, handleTodos, handleDelete }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = { title: title, desc: desc };
    handleTodos(todos);
    // -------------------------------------------
    e.target.reset();
  };

  return (
    <div>
      <div class="w-full mt-5 mx-auto max-w-2xl mb-2 px-8 py-4 rounded-l ">
        <form onSubmit={handleSubmit}>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username">
              Title
            </label>
            <input
              id="username"
              name="title"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username">
              Description
            </label>
            <input
              id="username"
              name="desc"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <input
            type="submit"
            class=" w-52 mx-52 mt-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            value="Add Todo"
          />
        </form>
      </div>
      <div class="w-full mx-auto max-w-2xl mb-2 px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
        {todos.map((todo) => (
          <Todo
            todo={todo.todo}
            id={todo.id}
            handleDelete={handleDelete}
          ></Todo>
        ))}
      </div>
    </div>
  );
};

export default Todos;
