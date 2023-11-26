import React, { useState } from "react";
import { removeTodoAction } from "./Redux/store/Todos";
import "./App.css";
import Todolist from "./Components/Todolist";
import { useDispatch } from "react-redux";
import { addTodoAction } from "./Redux/store/Todos";
import { once } from "lodash";
export default function App() {

  setTimeout(() => setShow(false), 2000);
  const [show, setShow] = useState(true);


  const [a, seta] = useState(true);

  if (show) {
    alert("سلام محمد باغانی ( برنامه نویس ) هستم اپ چکینو  را با ریداکس زدم باهاش کارهای روزمره ات را چک کن!")
    alert(" بعد از یادداشت برنامه های  روزانه ات کافیه روی  دکمه  سبز رنگ کلیک کنی !")
  }

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {


    event.preventDefault();
    if(title){
      
    if (a) {
      alert(" هر وقت برنامه ات را انجام دادی روی گزینه سطل آشغال کلیک کن !")
    }




    setTimeout(() => seta(false), 3000);

      dispatch(addTodoAction(title));
    }
   else{
    alert(" باید باکس را پر نمایید")
   }
    setTitle("");
  }
  const removeTodoHandler = () => {
    dispatch(removeTodoAction(id));
    const todos = store.getState();
    setTitle("");
  };
  return (
    <>
      <body>

        <div className="background">


          <form action="">
            <input
              type="text"
              className="todo-input"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button className="todo-button" type="submit" onClick={addTodoHandler}>

              <img src="check-mark-icon-transparent-7.png  ">
              </img>
            </button>
          </form>

          <div className="todo-container">
            <ul className="todo-list">
              <Todolist />
            </ul>
          </div>
        </div>

      </body>
    </>
  );
}

// const mapDispatchToProp = (dispatch) => ({
//   addTodo: (title) => dispatch(addTodoAction(title)),
// });

// export default connect(null, mapDispatchToProp)(App);
