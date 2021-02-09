import logo from "./images/logo.png";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={logo} alt="logo-deleveroo" />
      </div>
    </div>
  );
};

export default TopBar;
