import { useState, useEffect } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
const BasicTodo = () => {
  const [dateTime, setDateTime] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  //   Setting current date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const presentDate = new Date();
      const currDate = presentDate.toLocaleDateString();
      const currTime = presentDate.toLocaleTimeString();
      setDateTime(`${currDate} - ${currTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   Changes while typing task inside input field
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  //   Changes on adding a task
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    console.log(task);
    setInputValue("");
  };

  //   Changes on deleting the task
  const handleDeleteTask = (value) => {
    setTask((prevTask) => [
      ...prevTask.filter((currTask) => currTask !== value),
    ]);
  };

  //   Changes on deleting all tasks
  const handleDeleteAllTask = (task) => {
    setTask([]);
  };
  //   Changes on checking the task
  // const handleCheckTask = () => {};

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="date-time">{dateTime}</div>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button
                  className="check-btn"
                  // onClick={() => handleCheckTask(curTask)}
                >
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <div>
        <button className="clear-btn" onClick={() => handleDeleteAllTask()}>
          Clear all
        </button>
      </div>
    </section>
  );
};

export default BasicTodo;
