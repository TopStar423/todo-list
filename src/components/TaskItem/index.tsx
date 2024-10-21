import React from 'react';
import { ListItem, IconButton, Checkbox, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../../types/Todo';
import { taskItemStyles, taskGroupStyles } from './TaskItemStyles';

interface TaskItemProps {
  task: Todo;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onToggleComplete }) => {
  return (
    <ListItem sx={taskItemStyles}>
      <Box sx={taskGroupStyles}>
        <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
        <Box>
          <Typography
            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Due: {task.dueDate}
          </Typography>
        </Box>
      </Box>
      <IconButton onClick={() => onDeleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
