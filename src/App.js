import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-rs.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="header">logo</div>
      <div className="App">
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <div>{data.restaurant.name}</div>
        )}
      </div>
    </>
  );
}

export default App;
