import { useState } from "react";
import TodoDateTime from "../src/components/TodoDateTime";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "../src/components/localStorageData";
import "./App.css";

const App = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  // Submitting a task
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const matchedContent = task.find(
      (currTask) => currTask.content === content
    );
    if (matchedContent) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Setting the tasks to LocalStorage
  setLocalStorageTodoData(task);

  // Deleting a task
  const handleDeleteTask = (value) => {
    setTask((prevTask) => [
      ...prevTask.filter((currTask) => currTask.content !== value),
    ]);
  };

  // Deleting all tasks
  const handleClearAllTask = (task) => {
    setTask([]);
  };

  // UnChecking a task
  const handleCheckedTask = (value) => {
    const updateTask = task.map((currTask) => {
      if (currTask.content === value) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updateTask);
  };

  return (
    <section className="todo-container">
      <header className="">
        <h1>Todo It</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTask={handleDeleteTask}
                onHandleCheckedTask={handleCheckedTask}
              />
            );
          })}
        </ul>
      </section>
      <div>
        <button className="clear-btn" onClick={() => handleClearAllTask()}>
          Clear all
        </button>
      </div>
    </section>
  );
};

export default App;