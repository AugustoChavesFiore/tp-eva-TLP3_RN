import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useEffect } from "react";

export const TaskContext = createContext();
export const useTaskContext = () => React.useContext(TaskContext);
let initialTasks = localStorage.getItem("tasks");
if (initialTasks) {
  try {
    initialTasks = JSON.parse(initialTasks);
  } catch (error) {
    console.error("Error parsing tasks from localStorage", error);
    initialTasks = { tasks: [] };
  }
} else {
  initialTasks = { tasks: [] };
}
export const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
  }, [taskState]);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };
  const updateTask = (task) => {
    dispatch({ type: "EDIT_TASK", payload: task });
  };
  const taskDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const taskToggle = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }


  return (
    <TaskContext.Provider value={{ taskState, dispatch, addTask, updateTask, taskDelete, taskToggle }}>
      {children}
    </TaskContext.Provider>
  );
};
