import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

function Todos(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  console.log("props from store", props);

  return (
    <div className="addTodos">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="todo-input"
      />
      <button
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
        className="add-btn"
      >
        Add
      </button>
      <br />

      <ul>
        {props.todos.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
}

//We can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
