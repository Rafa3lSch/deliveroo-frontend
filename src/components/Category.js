import React from "react";
import Meal from "./Meal";

const Category = (props) => {
  console.log(props.name);
  return (
    <>
      <h3>{props.name}</h3>

      <div className="meals-container">
        {props.meals.map((meal, index) => {
          return <Meal {...meal} />;
        })}
      </div>
    </>
  );
};

export default Category;
