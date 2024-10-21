import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TodoPage from './pages/TodoPage';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <TodoPage />
    </TaskProvider>
  );
};

export default App;
