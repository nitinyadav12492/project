import "./Volunteers.css";

const Volunteers = () => {
  return (
    <section className="volunteers">
      <div className="volunteer-header">
        <h2>Volunteers</h2>
        <p>
          Work together with our amazing organization
          <br />
          to make a difference.
        </p>
      </div>

      <div className="volunteer-cards">
        <div className="volunteer-card">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Volunteer" />
        </div>

        <div className="volunteer-card">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Volunteer" />
        </div>

        <div className="volunteer-card">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Volunteer" />
        </div>

        <div className="volunteer-card">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Volunteer" />
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
