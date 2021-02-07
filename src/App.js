import React from 'react';
import './App.css';
import { TaskFrom, TaskList, Text } from './components';
import TaskListContextProvider from './context/TaskListContext';

const App = () => {
  return (
    <div>
      <TaskListContextProvider>
        <Text size='2xl' margin='1rem 0 2rem 1rem'>
          Task manager
        </Text>
        <TaskFrom />
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
};

export default App;
