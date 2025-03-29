const myTodoKey = "ReactTodo";

export const getLocalStorageTodoData = () => {
  const rawData = localStorage.getItem(myTodoKey);
  if (!rawData) return [];

  return JSON.parse(rawData);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(myTodoKey, JSON.stringify(task));
};
