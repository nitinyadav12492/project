import React, { useState } from "react";
import "./VolunteerSection.css";

const VolunteerSection = () => {
  const interestsList = [
  "Social Media",
  "Marketing / Branding",
  "Content Writing / Blogging / Copywriting",
  "Fundraising",
  "Presentation",
  "Photography",
  "Videography",
  "Internet / Web",
  "Teaching / Training / Coaching",
  "Illustration / Design / Drawing",
  "Multimedia / Animation",
  "Event Planning/Management",
  "Social Volunteering",
  "Community Management/Engagement",
  "Data Entry",
  "Caregivers",
  "Poster Creation"
];
const [selectedInterests, setSelectedInterests] = useState([]);

   

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    occupation: "",
    message: "",
    city: "",
    work: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };
const handleCheckboxChange = (interest) => {
  if (selectedInterests.includes(interest)) {
    setSelectedInterests(
      selectedInterests.filter((item) => item !== interest)
    );
  } else {
    setSelectedInterests([...selectedInterests, interest]);
  }
};

  return (
    <div>
      <div className="vsection">
        <h1>Volunteer With Us</h1>
        <p>Be a part of our noble cause by being the volunteers of our foundation.</p>
      </div>

      <div className="container1">
        <h1>Volunteer Registration</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Contact No.</label>
              <input 
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Your mobile number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Occupation</label>
              <input 
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Your occupation"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input 
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
              />

              <label style={{marginTop:"15px"}}>Work Preference</label>
              <div className="radio-group">
                <input 
                  type="radio"
                  name="work"
                  value="Home"
                  onChange={handleChange}
                /> Home

                <input 
                  type="radio"
                  name="work"
                  value="Location"
                  onChange={handleChange}
                /> Location
              </div>
            </div>
          </div>
          <div className="interests">
  <label>Interests:</label>

  <div className="checkbox-grid">
    {interestsList.map((interest, index) => (
      <label key={index}>
        <input
          type="checkbox"
          checked={selectedInterests.includes(interest)}
          onChange={() => handleCheckboxChange(interest)}
        />
        {interest}
      </label>
    ))}
  </div>
</div>


          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default VolunteerSection;
