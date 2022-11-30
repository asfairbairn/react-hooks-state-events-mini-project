import React from "react";

function NewTaskForm({formCategories, onTaskFormSubmit}) {
  const mapFormCategories = formCategories.map((formCategory) => {
    return <option key={formCategory}>{formCategory}</option>
  })
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {mapFormCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
