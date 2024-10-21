import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { useTaskSorting } from '../../hooks/useTaskSorting';
import { useTaskFiltering } from '../../hooks/useTaskFiltering';
import { useTasks } from '../../context/TaskContext';
import SortControl from '../../components/Controls/SortControl';
import FilterControl from '../../components/Controls/FilterControl';
import { controlBoxStyles } from './TodoPageStyles';

const TodoPage: React.FC = () => {
  const { tasks, addTask, deleteTask, toggleComplete } = useTasks();

  // Sorting and filtering hooks
  const { sortedTasks, sortOption, setSortOption, sortDirection, setSortDirection } = useTaskSorting(tasks);
  const { filteredTasks, filterOption, setFilterOption } = useTaskFiltering(sortedTasks);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>

      {/* Task Form for adding new tasks */}
      <TaskForm onAddTask={addTask} />

      {/* Sorting and Filtering Controls */}
      <Box sx={controlBoxStyles}>
        <SortControl
          sortOption={sortOption}
          setSortOption={setSortOption}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <FilterControl filterOption={filterOption} setFilterOption={setFilterOption} />
      </Box>

      {/* Conditionally render "No tasks to display" if no tasks exist */}
      {filteredTasks.length === 0 ? (
        <Typography align="center" variant="body1" color="textSecondary">
          No tasks to display
        </Typography>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      )}
    </Container>
  );
};

export default TodoPage;
