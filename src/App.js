import "./App.css";
import axios from "axios";
import TopBar from "./TopBar";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const App = () => {
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

  return (
    <div className="App">
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div>
          <TopBar />
          <Hero
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <Content
            data={data}
            setData={setData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            cart={cart}
            setCart={setCart}
            useEffect={useEffect}
          />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
