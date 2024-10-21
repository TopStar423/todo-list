import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { formStyles, textFieldStyles, buttonStyles } from './TaskFormStyles';

interface TaskFormProps {
  onAddTask: (description: string, dueDate: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [dueDateError, setDueDateError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Reset error states
    setDescriptionError(false);
    setDueDateError(false);

    // Validate fields
    if (!description.trim()) {
      setDescriptionError(true);
    }
    if (!dueDate) {
      setDueDateError(true);
    }

    // If both fields are valid, add the task
    if (description.trim() && dueDate) {
      onAddTask(description, dueDate);
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formStyles}>
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        error={descriptionError}
        helperText={descriptionError ? 'Task description is required' : ' '} // Reserve space for helper text
        FormHelperTextProps={{ sx: { minHeight: '1.5em' } }} // Fix height for error message space
        sx={textFieldStyles.description}
      />
      <TextField
        label="Due Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        error={dueDateError}
        helperText={dueDateError ? 'Due date is required' : ' '}
        FormHelperTextProps={{ sx: { minHeight: '1.5em' } }}
        sx={textFieldStyles.dueDate}
      />
      <Button variant="contained" type="submit" sx={buttonStyles}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
