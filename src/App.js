import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./index.css";
import "./App.css";
import Logo from "./assets/images/deliveroo.png";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://deliveroo-backend-rs.herokuapp.com/"
      );
      const data = await response.json();
      setRestaurant(data.restaurant);
      setCategories(data.categories);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <img src={Logo} className="logo" alt="" />
        </div>
      </div>
      <div className="wrapper">
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <div className="resto-infos">
            <div className="resto-description">
              <div>{restaurant.name}</div>
              <div>{restaurant.description}</div>
            </div>
            <img
              src={restaurant.picture}
              alt={restaurant.name}
              className="header-img"
            />
          </div>
        )}
      </div>
      <div className="grey-back">
        <div className="wrapper">
          {isLoading === true ? (
            <p>En cours de chargement ...</p>
          ) : (
            <div className="resto-details">
              <div className="meals">
                {categories.map((category, index) => {
                  if (category.meals.length === 0) {
                    return null;
                  }
                  return (
                    <Category name={category.name} meals={category.meals} />
                  );
                })}
              </div>
              <div className="basket">le panier</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
