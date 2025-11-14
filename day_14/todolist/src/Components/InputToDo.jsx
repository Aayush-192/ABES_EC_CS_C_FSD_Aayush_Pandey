import { useState } from "react"

const InputToDo = ({ inputHandler }) => {
    const [inputValue, setInputValue] = useState("");
    const addTask = () => {
        if (inputValue.trim() === "") return;
        inputHandler(inputValue);
        setInputValue("");
    }
    return (
        <div className="input-todo">
            <input type="text" name="todo-input" id="todo-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTask}>
                ADD
            </button>
        </div>
    )
}

export default InputToDo