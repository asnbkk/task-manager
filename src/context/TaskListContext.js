import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialTasks);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    //update only one item through the list
    const newTasks = tasks.map((item) =>
      item.id === id ? { task: title, id } : item
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const addTask = (task) => {
    setTasks([...tasks, { task, id: uuid() }]);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
