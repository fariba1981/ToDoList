import React, { useState, useEffect } from "react";
import "./styles.css";

function TodosComponent() {
  const startingList = JSON.parse(localStorage.getItem("todos")) || [];
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState(startingList);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function createNewTodo(currentTodo) {
    if (currentTodo === "") {
      alert(
        " task cant be empty."
      );
      return;
    }
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isComplete: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    const todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  return (
    <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={(e) => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="+ Add task"
      />
      {todos.map((todo, index) => (
        <div key={todo.todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 1 && `${todos.length} items`}
    </div>
  );
}

export default TodosComponent;
