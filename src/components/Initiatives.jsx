import "./Initiatives.css";

const Initiatives = () => {
  return (
    <section className="initiatives">
      <h2>Our Initiatives</h2>

      <div className="initiatives-container">

      
        <div className="initiative-card">
          <img src="https://ngo-landing-page-rho.vercel.app/initiative1.avif" alt="Plates of Kindness" />
          <div className="card-content">
            <h3>Plates of Kindness</h3>
            <p>
              We believe that everyone deserves the basic dignity of a warm meal. While providing shelter to all those in need might not always be possible, we extend our support by distributing 1,000 nutritious meals every month to individuals living on the streets, in temporary huts, or in vulnerable conditions. For many, a meal isn't just food—it's hope, strength, and the assurance that someone cares.
            </p>
            <button className="support-btn">
              Support This Initiative
            </button>
          </div>
        </div>

        
        <div className="initiative-card">
          <img
  src="https://ngo-landing-page-rho.vercel.app/initiative2.avif"
  alt="Threads of Hope"
/>

          <div className="card-content">
            <h3>Threads of Hope</h3>
            <p>
             We donate 100 pairs of clothing, footwear, and blankets every month to those in need. This project is dedicated to providing essential items that offer warmth, dignity, and comfort to individuals living in vulnerable conditions to make life a little easier for those struggling without basic necessities. For individuals facing life without shelter or security, even small essentials like clothing and blankets can make a world of difference.
            </p>
            <button className="support-btn">
              Support This Initiative
            </button>
          </div>
        </div>

    
        <div className="initiative-card">
          <img src="https://ngo-landing-page-rho.vercel.app/initiative3.avif" alt="Safe Haven" />
          <div className="card-content">
            <h3>Safe Haven</h3>
            <p>
             We believe that everyone deserves a safe place to rest and rebuild their lives. We provide well-maintained shelters equipped with basic necessities, offering a sense of security and dignity. Our shelters are spaces where individuals can find emotional support, guidance, and encouragement to rebuild their lives. Residents participate in workshops on life skills, financial literacy, and health education, preparing them for a self-reliant and independent future.
            </p>
            <button className="support-btn">
              Support This Initiative
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Initiatives;
