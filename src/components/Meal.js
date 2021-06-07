import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = (props) => {
  return (
    <div className="meal-container">
      <div className="meal-left">
        <p>{props.title}</p>
        <p className="meal-desc">{props.description}</p>
        <div className="meal-horizontal">
          <p>{props.price}</p>

          {props.popular && (
            <p className="star-icon">
              <FontAwesomeIcon icon="star" />
              Populaire
            </p>
          )}
        </div>
      </div>
      {props.picture && (
        <img src={props.picture} alt={props.title} className="meal-img" />
      )}
    </div>
  );
};

export default Meal;
