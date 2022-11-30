import React from "react";
import Task from "./Task"

function TaskList({myTasks, deleteTask}) {
  
  const mapTasks = myTasks.map((myTask) => {
    return <Task key={myTask.id} myTask={myTask}  deleteTask={deleteTask}/>

  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mapTasks}
    </div>
  );
}

export default TaskList;
