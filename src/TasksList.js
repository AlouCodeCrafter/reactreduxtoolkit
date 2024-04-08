import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TasksList = (props) => {
  const tasks = useSelector((state) => console.log(state));
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;
