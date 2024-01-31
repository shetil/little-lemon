const Hero = ({children}) => {
  return (
    <section className="hero">
      <div className="container grid">
        {children}
      </div>
    </section>
  );
};

export default Hero;
