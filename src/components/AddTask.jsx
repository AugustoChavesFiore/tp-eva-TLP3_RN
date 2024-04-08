import { useEffect } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { useForm } from "../hook/useForm";

export const AddTask = ({data}) => {
  const {addTask, updateTask } = useTaskContext();
  console.log();
  const { handleInputChange, reset, values, setValues } = useForm({
    description:data? data.description : '',
    title: data? data.title :'',
  });
  useEffect(() => {
    if (data) {
      setValues({ title: data.title, description: data.description });
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title || !values.description) {
      return alert("Please fill all the fields");
    }
    if (data){
      const task= { id: data.id, title: values.title, description: values.description
      };
      updateTask(task);
      
        
    }else{
      const task={
        id: Math.floor(Math.random() * 10000),
        title: values.title,
        description: values.description,
        completed: false,
      };
      addTask(task);

      reset();
    }

  };
  return (
    <form onSubmit={handleSubmit} className="form-control container">
      <input
        type="text"
        className="form-control"
        name="title"
        placeholder="Title"
        value={values.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control"
        name="description"
        placeholder="Description"
        value={values.description}
        onChange={handleInputChange}
      />
      <button type="submit"   data-bs-dismiss="modal" className="form-control btn btn-info">
        {data ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};
