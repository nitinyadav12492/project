import "./Stats.css";
import { FaRegHeart } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { MdPerson3 } from "react-icons/md";
const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">

        
        <div className="stat-card">
          <div className="stat-icon"><CiHome /></div>
          <h3>50+</h3>
          <p>Lives Impacted</p>
        </div>

       
        <div className="stat-card">
          <div className="stat-icon">
            <FaRegHeart />
          </div>
          <h3>2</h3>
          <p>Active Projects</p>
        </div>

        
        <div className="stat-card">
          <div className="stat-icon"><MdPerson3 /></div>
          <h3>5</h3>
          <p>Volunteers</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
