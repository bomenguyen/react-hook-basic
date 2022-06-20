import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./component/colorBox";
import { useState } from "react";
import TodoList from "./component/toDoList";
import TodoForm from "./component/toDoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  function handleClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    console.log("form-submit", formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Welcome react hook - to do list</h1>
      <TodoList todos={todoList} onTodoClick={handleClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
