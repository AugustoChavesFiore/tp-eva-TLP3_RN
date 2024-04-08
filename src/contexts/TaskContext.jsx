import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext();
export const useTaskContext = () => React.useContext(TaskContext);
export const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, { tasks: [] });

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
