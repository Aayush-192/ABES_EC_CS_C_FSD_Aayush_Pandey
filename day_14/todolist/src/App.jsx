import { useState } from "react"
import InputToDo from "./Components/InputToDo"
function App() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (inputValue) => {
    setTodoList([...todoList, inputValue]);
  }
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList([...newList]);
  }
  const updateHandler = (index, data) => {

  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <button onClick={() => deleteHandler(index)}>DEL</button>
          <button onClick={() => updateHandler(index, data)}>DEL</button>
        </li>)}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App
