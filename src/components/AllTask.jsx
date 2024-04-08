import {useState} from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { AddTask } from "./AddTask";
import { useEffect } from "react";
export const AllTask = ( ) => {
  const { taskState, taskDelete, taskToggle} = useTaskContext();
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    setTasks(taskState.tasks);
  }, [taskState.tasks]);

  const deleteTask = (e) => {
    taskDelete(Number(e.target.id));
  };
  const editTask = (e) => {
    setData(taskState.tasks.find((item) => item.id === Number(e.target.id)));
  };

  const toggleTask = (e) => {
    taskToggle(Number(e.target.id));
  }

  return (
    <>
          {tasks.map((item, index) => (
            <section key={index} className={item.completed? "card":"card bg-warning"}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  id={item.id}
                  onClick={deleteTask}
                  className="btn btn-danger me-2"
                >
                  Delete
                </button>
                <button
                  id={item.id}
                  onClick={editTask}
                  className="btn btn-info me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#taskModal"
                >
                  Edit
                </button>
                <button id={item.id} onClick={toggleTask} className={item.completed?"btn btn-success ":"btn  btn--warning-subtle"}>
                  {item.completed ? "Completed" : "Not Completed"}
                </button>
              </div>
            </section>
          ))}

      <div
        className="modal fade"
        id="taskModal"
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="taskModalLabel">
                Edit Task
              </h1>
            </div>
            <div className="modal-body">
              {
                <AddTask data={data}/>
              }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
