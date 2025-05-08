import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "../styles/courses.css";
import "../styles/joinUsNow.css";
import Form from "../components/Form";

function HomePage({ setCurrentPage }) {
  const [showForm, setShowForm] = useState(false); 

  const [theme, setTheme] = useState("light");

   
   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <main className="home-page">
    
    <button
        onClick={toggleTheme}
        className="theme-switcher-button"
        
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>


      
      <section id="welcome" className="welcome-section">
        <h1>Welcome to Dog Training Club</h1>
        <img src="/images/home.jpg" alt="Dog Training" className="home-image" />
        <p>We offer a variety of dog training courses to help you and your furry friend build a better bond.</p>
      </section>

      
      <section id="courses" className="courses-section">
        <h1>Our Courses</h1>
        <div className="course-list">
          <div className="course-card">
            <h2>Basic Dog Training</h2>
            <img src="/images/basic-training.jpg" alt="Basic Dog Training" />
            <p>Learn the fundamentals of dog obedience.</p>
          </div>
          <div className="course-card">
            <h2>Advanced Dog Training</h2>
            <img src="/images/advanced-training.jpg" alt="Advanced Dog Training" />
            <p>Enhance your dog's skills with advanced training.</p>
          </div>
          <div className="course-card">
            <h2>Premium Dog Training</h2>
            <img src="/images/premium-training.jpg" alt="Premium Dog Training" />
            <p>Comprehensive training for agility and behavior.</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage("courses")} 
          className="see-details-button"
        >
          See Details
        </button>
      </section>

      
      <section id="join-us" className="join-us-section">
        <h1>Join Us Now</h1>
        <img src="/images/join-us.jpg" alt="Join Us" className="join-us-image" />
        <p>Register now and unlock your potential with our courses!</p>
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="register-button">
            Register
          </button>
        )}
        {showForm && <Form onClose={() => setShowForm(false)} />} 
      </section>

      
      <section id="contact" className="contact-section">
        <h1>Contact Us</h1>
        <p>Email: support@dogtrainingclub.com</p>
        <p>Phone: +123 456 7890</p>
      </section>
    </main>
  );
}

export default HomePage;
