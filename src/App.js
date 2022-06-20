import logo from "./logo.svg";
import queryString from "query-string";
import "./App.scss";
import ColorBox from "./component/colorBox";
import { useEffect, useState } from "react";
import TodoList from "./component/toDoList";
import TodoForm from "./component/toDoForm";
import Postlist from "./component/postList";
import Pagination from "./component/pagination";

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
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [fillter, setFillter] = useState({
    _limit: 10,
    _page: 1,
  });
  // PostList
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(fillter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log({ responseJson });

        const { data, pagination } = responseJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("faile to fetch post list", error.message);
      }
    }
    console.log("postlist Effect");
    fetchPostList();
  }, [fillter]);

  function handlePageChange(newPage) {
    console.log("new page", newPage);
    setFillter({
      ...fillter,
      _page: newPage,
    });
  }

  return (
    <div className="App">
      <h1>Welcome react hook - postlist</h1>
      {/* <TodoList todos={todoList} onTodoClick={handleClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      <Postlist posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
