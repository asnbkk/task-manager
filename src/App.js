import React from 'react';
import './App.css';
import { TaskList } from './components';
import TaskListContextProvider from './context/TaskListContext';

const App = () => {
  return (
    <div>
      <TaskListContextProvider>
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
};

export default App;
