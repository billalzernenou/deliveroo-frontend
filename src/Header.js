const Header = ({ name, description, picture }) => {
  return (
    <div className="header">
      <div>
        <h1> {name}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src={picture} alt="dish"></img>
      </div>
    </div>
  );
};

export default Header;
