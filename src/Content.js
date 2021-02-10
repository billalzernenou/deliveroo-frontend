import Menu from "./Menu";
import Cart from "./Cart";

const Content = ({
  data,
  setData,
  isLoading,
  setIsLoading,
  cart,
  setCart,
  useEffect,
}) => {
  return (
    <div className="content">
      <div className="container">
        <Menu data={data} setData={setData} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Content;
