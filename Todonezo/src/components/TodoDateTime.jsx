import { useState, useEffect } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  //   Setting local date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const curDate = new Date();
      const updatedDate = curDate.toLocaleDateString();
      const updatedTime = curDate.toLocaleTimeString();
      setDateTime(`${updatedDate} - ${updatedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};

export default TodoDateTime;
