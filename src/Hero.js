const Hero = ({ name, description, picture }) => {
  return (
    <div className="hero">
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

export default Hero;
