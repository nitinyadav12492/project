import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          
          <h1>
            Spreading Smiles,
            <br />
            <span>Building Futures</span>
          </h1>

          <p>
            Empowering lives with shelter, care, and education,
            one smile at a time.
          </p>

          <div className="hero-buttons">
            <Link to="/donate" className="btn-primary">
              Donate Now
            </Link>

            <Link to="/story" className="btn-outline">
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
