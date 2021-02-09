import axios from "axios";

import Header from "./Header";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

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

  //add meal
  const addMeal = (id, title, price) => {
    // create a copy of the state
    const newCart = [...cart];
    // iterate of element exist
    for (let i = 0; i < newCart.length; i++) {
      // if the meal already exist in the cart => increment quantity
      if (newCart[i].id === id) {
        newCart[i].quantity = newCart[i].quantity + 1;
        setCart(newCart);
        console.log(cart);

        return newCart[i];
      }
    }
    // if element doesn't exist create a new one then push it
    let mealToAdd = {
      id: id,
      price: price,
      title: title,
      quantity: 1,
    };
    newCart.push(mealToAdd);
    setCart(newCart);
    return mealToAdd;
  };

  //sum price
  const calculateBill = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    return sum;
  };

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
              <div className="category">
                {
                  //iterate throw catogories
                  data.categories.map((category, index) => {
                    return (
                      category.meals.length > 0 && (
                        <div $key={`category-${index}`}>
                          <h2>{category.name}</h2>
                          <div className="meal-items">
                            {/* iterate throw each category*/}
                            {category.meals.map((meal, index) => {
                              return (
                                <div
                                  onClick={() => {
                                    //add meal to cart
                                    addMeal(meal.id, meal.title, meal.price);
                                  }}
                                  className="meal-item"
                                  key={`meal-${index}`}
                                >
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
                      )
                    );
                  })
                }
              </div>
              <div className="cart">
                <button>Valider mon pannier</button>

                <div>
                  {cart.map((meal, index) => {
                    return (
                      <div>
                        {meal.title} --- {meal.price}€--{" "}
                        {meal.price * meal.quantity}€-
                      </div>
                    );
                  })}
                  <div>Sous Total :{calculateBill(cart)}</div>
                  <div>
                    <p>Frais de livraison 2,50 €</p>
                    <p>
                      Total :
                      {calculateBill(cart) > 0 ? calculateBill(cart) + 2.5 : 0}€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
