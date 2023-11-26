import React from "react";
import { removeTodoAction } from "../Redux/store/Todos";
import { useDispatch } from "react-redux";
import "../App.css";

export default function Todo({ title, id }) {
  const dispatch = useDispatch();


  const removeTodoHandler = () => {

    dispatch(removeTodoAction(id));


    setTitle("");
  };
  return (
    <div className="todo">
      <li className="todo-item">{title}</li>

      <button onClick={removeTodoHandler}>
        <i className="fas fa-trash"  ></i>
      </button>
    </div>
  );
}
