import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "../components/Form"; 
import "../styles/courseDetails.css";

function CourseDetailsPage() {
  const [showForm, setShowForm] = useState(false); 
  return (
    <div>
      <div className="course-details-container">
        
        <h1>Basic Dog Training</h1>
        <img src="/images/basic-training.jpg" alt="Basic Dog Training" className="course-main-image" />
        <div className="course-info">
          <p><strong>Time:</strong> Every Saturday, 10:00 AM - 12:00 PM</p>
          <p><strong>Location:</strong> Greenfield Park, Training Area 3</p>
          <p><strong>Price:</strong> $150</p>
          <p><strong>Equipment:</strong> Leash, Collar, Dog Treats</p>
        </div>
        <img src="/images/basic-training-venue.jpg" alt="Training Venue" className="venue-image" />
        <h2>Course Content</h2>
        <ul>
          <li>Basic Obedience: Sit, Stay, Come</li>
          <li>Leash Training</li>
          <li>House Training Tips</li>
          <li>Socialization with Other Dogs</li>
        </ul>
        <h2>Trainer</h2>
        <div className="trainer-info">
          <img src="/images/trainer-alex.jpg" alt="Trainer Alex" className="trainer-photo" />
          <p><strong>Alex Johnson</strong></p>
          <p>
            Alex is an experienced dog trainer specializing in basic obedience. He has worked with
            over 300 dogs to help them build confidence and develop good manners.
          </p>
        </div>

        
        <h1>Advanced Dog Training</h1>
        <img src="/images/advanced-training.jpg" alt="Advanced Dog Training" className="course-main-image" />
        <div className="course-info">
          <p><strong>Time:</strong> Every Sunday, 2:00 PM - 4:00 PM</p>
          <p><strong>Location:</strong> Riverside Training Center, Hall B</p>
          <p><strong>Price:</strong> $250</p>
          <p><strong>Equipment:</strong> Leash, Collar, Clicker</p>
        </div>
        <img src="/images/advanced-training-venue.jpg" alt="Training Venue" className="venue-image" />
        <h2>Course Content</h2>
        <ul>
          <li>Advanced Commands: Heel, Drop, Wait</li>
          <li>Problem-Solving Skills</li>
          <li>Behavioral Training</li>
          <li>Agility Basics</li>
        </ul>
        <h2>Trainer</h2>
        <div className="trainer-info">
          <img src="/images/trainer-sophia.jpg" alt="Trainer Sophia" className="trainer-photo" />
          <p><strong>Sophia Williams</strong></p>
          <p>
            Sophia is a certified professional dog trainer with expertise in behavioral issues and
            advanced obedience training. She is passionate about helping dogs and their owners bond
            through training.
          </p>
        </div>

        
        <h1>Premium Dog Training</h1>
        <img src="/images/premium-training.jpg" alt="Premium Dog Training" className="course-main-image" />
        <div className="course-info">
          <p><strong>Time:</strong> Saturdays and Sundays, 9:00 AM - 12:00 PM</p>
          <p><strong>Location:</strong> Central Training Arena, Hall A</p>
          <p><strong>Price:</strong> $500</p>
          <p><strong>Equipment:</strong> Leash, Harness, Clicker, Treat Pouch</p>
        </div>
        <img src="/images/premium-training-venue.jpg" alt="Training Venue" className="venue-image" />
        <h2>Course Content</h2>
        <ul>
          <li>Advanced Obedience Commands</li>
          <li>Behavior Modification Techniques</li>    
          <li>Agility Training</li>    
          <li>Custom Behavioral Plans</li>    
        </ul>
        <h2>Trainer</h2>
        <div className="trainer-info">
          <img src="/images/trainer-michael.jpg" alt="Trainer Michael" className="trainer-photo" />
          <p><strong>Michael Brown</strong></p>
          <p>
            Michael is an award-winning dog trainer with over 15 years of experience. He specializes
            in agility and behavior correction, ensuring every dog reaches their full potential.
          </p>
        </div>

        
       
        {!showForm && (
          <button className="register-button" onClick={() => setShowForm(true)}>
            Register
          </button>
        )}
        {showForm && <Form onClose={() => setShowForm(false)} />} 
        
      </div>
      
    </div>
  );
}

export default CourseDetailsPage;

