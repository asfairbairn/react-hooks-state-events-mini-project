import React from "react";

function Task({myTask, deleteTask}) {
  
  return (
    <div className="task">
      <div className="label">{myTask.category}</div>
      <div className="text">{myTask.text}</div>
      <button className="delete" onClick={() => deleteTask(myTask.id)}  >X</button>
    </div>
  );
}

export default Task;
