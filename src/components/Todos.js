import React, { useState } from "react";

function Todos() {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="addTodos">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="todo-input"
      />
      <button className="add-btn">Add</button>
    </div>
  );
}

export default Todos;
