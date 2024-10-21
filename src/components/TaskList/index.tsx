import React from 'react';
import { List, Divider } from '@mui/material';
import TaskItem from '../TaskItem';
import { Todo } from '../../types/Todo';
import { listStyles } from './TaskListStyles';

interface TaskListProps {
  tasks: Todo[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <List sx={listStyles}>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} onDeleteTask={onDeleteTask} onToggleComplete={onToggleComplete} />
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default TaskList;
