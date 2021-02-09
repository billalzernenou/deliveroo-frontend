import "./App.css";
import Menu from "./Menu";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
