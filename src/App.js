import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [restaurant, setRestaurent] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [restaurants, setRestaurants] = useState([]);
  // fetch data function
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://the-deliveroo-backend.herokuapp.com/"
      );

      setRestaurent(response.data.restaurant);
      setCategories(response.data.categories);
      console.log(response.data.categories);
    } catch (error) {
      alert("An error occurred");
    }
  };
  // fetchData();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>{restaurant.name}</div>
      <div>
        {
          //iterate throw catogories
          categories.map((category, index) => {
            return (
              <div>
                <div key={index}>{category.name}</div>
                <div style={{ backgroundColor: "grey" }}>
                  {/* iterate throw each category*/}
                  {category.meals.map((meal, index) => {
                    return meal.title;
                  })}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
