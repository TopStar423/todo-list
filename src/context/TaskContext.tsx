import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Todo } from '../types/Todo';

// Define the shape of our context
interface TaskContextType {
  tasks: Todo[];
  addTask: (description: string, dueDate: string) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Custom hook to access the task context
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

// Task provider component
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (description: string, dueDate: string) => {
    const newTask: Todo = {
      id: Date.now(),
      description,
      dueDate,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
