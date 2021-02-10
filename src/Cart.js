const Cart = ({ cart, setCart }) => {
  //sum price
  const calculateBill = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    return sum;
  };
  return (
    <div className="cart">
      <div className="Cart--card">
        <button className="Cart--validate">Valider mon pannier</button>
        <div className="Cart--items">
          {cart.map((meal, index) => {
            return (
              // Cart--counter
              <div className="Cart--line">
                <span className="Cart--counter">{meal.quantity}</span>
                <span className="Cart--item-name">{meal.title}</span>
                <span className="Cart--amount">
                  {(meal.price * meal.quantity).toFixed(2)} €
                </span>
              </div>
            );
          })}
        </div>
        <div className="Cart--results">
          <div className="Cart--result-line">
            <span className="Cart--result-name"> Sous Total </span>
            <span className="Cart--amount">
              {" "}
              {calculateBill(cart).toFixed(2)}
            </span>
          </div>
          <div className="Cart--result-line">
            <span className="Cart--result-name">Frais de livraison</span>
            <span className="Cart--amount">2,50 €</span>
          </div>
          <div class="Cart--total">
            <span class="Cart--result-name">Total</span>
            <span class="Cart--amount">
              {calculateBill(cart) > 0
                ? (calculateBill(cart) + 2.5).toFixed(2)
                : 0}
              €
            </span>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
