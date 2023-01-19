import React from "react";

const Todo = ({ todo, handleDelete, id }) => {
  const { title, desc } = todo;

  return (
    <div class="flex justify-between items-center max-w-2xl mb-2 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div>
        <h3 className="text-xl font-mono">Title: {title}</h3>
        <p className="text-lg">Description: {desc}</p>
      </div>
      <div>
        <button
          onClick={() => handleDelete(id)}
          class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
