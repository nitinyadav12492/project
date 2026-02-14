import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="our-story">
      
      
      <section
        className="hero"
        style={{ backgroundImage: "url('/nitin.avif')" }}
      >
        <div className="overlay">
          <h1>Our Story</h1>
        </div>
      </section>

     
      <section className="content">
        <div className="container">
          <h2>Our Beginning</h2>
          <p>
            Founded in Aug 2024, Muskurahat Foundation began with a simple
            mission: to provide shelter and support to those who needed it
            most. What started as a small initiative has grown into a
            comprehensive support system for homeless children and hardworking
            individuals facing difficult times.
          </p>
        </div>
      </section>

      
      <section className="content">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            We believe that everyone deserves a chance at a better life.
            Our mission is to provide not just shelter, but hope, education,
            and opportunities for those in need to rebuild their lives and
            achieve their dreams.
          </p>
        </div>
      </section>

      
      <section className="content">
        <div className="container">
          <h2>Our Impact</h2>
          <p>
            Over the years, we've helped thousands of individuals and families
            find their path to stability and success. Through our various
            programs and initiatives, we've created lasting change in our
            community and continue to expand our reach.
          </p>

          <div className="quote-box">
            <p>
              “Hope is the foundation upon which dreams are built.
              At Muskurahat Foundation, we provide that foundation.”
            </p>
          </div>

          <h2 className="mt">Looking Forward</h2>
          <p>
            As we continue to grow, our commitment to serving our community
            remains unchanged. We're developing new programs and partnerships
            to create more opportunities for positive change.
          </p>
        </div>
      </section>

    </div>
  );
};

export default OurStory;
