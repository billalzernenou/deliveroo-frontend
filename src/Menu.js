import axios from "axios";

import Header from "./Header";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data function
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://the-deliveroo-backend.herokuapp.com/"
      );

      setData(response.data);
      setIsLoading(false);
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
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div>
          <Header
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <div className="main">
            <div className="meals">
              {
                //iterate throw catogories
                data.categories.map((category, index) => {
                  return (
                    <div className="category" $key={`category-${index}`}>
                      <h2>{category.name}</h2>
                      <div className="meal-items">
                        {/* iterate throw each category*/}
                        {category.meals.map((meal, index) => {
                          return (
                            <div className="meal-item" key={`meal-${index}`}>
                              <div>
                                <h3>{meal.title}</h3>
                                <p>{meal.description}</p>
                                <div>
                                  <p className="price">{meal.price} €</p>
                                  {meal.popular && (
                                    <p>
                                      Populaire{" "}
                                      <FontAwesomeIcon
                                        icon="star"
                                        color="#ff8000"
                                      />
                                    </p>
                                  )}
                                </div>
                              </div>
                              {meal.picture && (
                                <div className="picture">
                                  <img src={meal.picture} />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
