import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setMyTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  let isSelected = false

  function deleteTask(id) {
    const updatedTasks = myTasks.filter(task => task.id !== id)
    setMyTasks(updatedTasks)
  }

  function filterByCategory(category) {
    isSelected = !isSelected
    setCategory(category)

  }

  function onTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {
      id: newTaskId(),
      text: e.target.text.value,
      category: e.target.category.value
    }
    const updatedTasks = [...myTasks, newTask]
    console.log(updatedTasks)
    setMyTasks(updatedTasks)

  }

  const newTaskId = ((id) => () => ++id)(7)
    

  const formCategories = CATEGORIES.filter(category => category !== "All")

  const filteredTasks = category === "All" ? myTasks : myTasks.filter(task => {
    return task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  filterByCategory={filterByCategory} isSelected={isSelected}/>
      <NewTaskForm formCategories={formCategories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList myTasks={filteredTasks}  deleteTask={deleteTask} />
    </div>
  );
}

export default App;
