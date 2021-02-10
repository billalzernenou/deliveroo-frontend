import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//add meal
const addMeal = (id, title, price, cart, setCart) => {
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
const Menu = ({ data, setData, cart, setCart }) => {
  return (
    <div className="menu">
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
                          addMeal(
                            meal.id,
                            meal.title,
                            meal.price,
                            cart,
                            setCart
                          );
                        }}
                        className="meal-item"
                        key={`meal-${index}`}
                      >
                        <div>
                          <h3>{meal.title}</h3>
                          <p>{meal.description.slice(0, 50)}...</p>
                          <div>
                            <p className="price">{meal.price} €</p>
                            {meal.popular && (
                              <p>
                                Populaire{" "}
                                <FontAwesomeIcon icon="star" color="#ff8000" />
                              </p>
                            )}
                          </div>
                        </div>
                        {meal.picture && (
                          <div className="picture">
                            <img src={meal.picture} alt="meal" />
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
  );
};

export default Menu;
