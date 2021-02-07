import React, { useContext } from 'react';
import { TaskCard } from '..';
import { TaskListContext } from '../../context/TaskListContext';
import { List } from './TaskListStyle';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  const _tasks = tasks.map((item, index) => {
    return <TaskCard />
  })

  return <List>{_tasks}</List>;
};

export default TaskList;
