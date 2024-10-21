import { Todo } from '../types/Todo';

// This service can be expanded in the future to handle API calls, local storage, etc.
export const TaskService = {
  createTask: (description: string, dueDate: string): Todo => {
    return {
      id: Date.now(),
      description,
      dueDate,
      completed: false,
    };
  },
};
