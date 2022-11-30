import React from "react";

function CategoryFilter({categories, filterByCategory, isSelected}) {
  const mapButtons = categories.map((category)=> {
    return <button key={category} onClick={() => filterByCategory(category)} setClass={isSelected ? "selected" : ""} >{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {mapButtons}
    </div>
  );
}

export default CategoryFilter;
