import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import { Icon, Text } from '..';
import { Wrapper } from './TaskCardStyle';

const TaskCard = ({ task: { task, id } }) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <Wrapper>
      <Text>{task}</Text>
      <Icon onClick={() => findItem(id)} cursor='pointer' icon='edit' />
      <Icon onClick={() => removeTask(id)} cursor='pointer' icon='delete' />
    </Wrapper>
  );
};

export default TaskCard;
