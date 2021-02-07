import React, { useContext } from 'react';
import { TaskCard, Text } from '..';
import { TaskListContext } from '../../context/TaskListContext';
import { List, NoList } from './TaskListStyle';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  const _tasks = tasks.map((item) => {
    return <TaskCard task={item} key={item.id} />;
  });

  return (
    <List>
      {tasks.length > 0 ? (
        _tasks
      ) : (
        <NoList>
          <Text size='sm' type='plainText'>
            No tasks yet :(
          </Text>
        </NoList>
      )}
    </List>
  );
};

export default TaskList;
