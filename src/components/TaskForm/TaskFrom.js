import React, { useContext, useEffect, useState, useRef } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import { Button } from '..';
import { Wrapper, Input, Buttons } from './TaskFormStyle';

const TaskFrom = () => {
  const { addTask, clearList, tasks, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
      setTitle('');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const _input = useRef(null);
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.task);
      _input.current.focus();
    } else setTitle('');
  }, [editItem]);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        ref={_input}
        value={title}
        onChange={handleChange}
        placeholder='Type your taks here...'
      />
      <Buttons>
        <Button disabled={title.length < 1} onClick={handleSubmit}>
          {!editItem ? 'Add task' : 'Edit item'}
        </Button>
        <Button disabled={tasks.length < 1} onClick={() => clearList()}>
          Clear all
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default TaskFrom;
