import React from "react";
import "../styles/aboutUs.css";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      
      <h1 className="about-us-title">About Us</h1>

      
      <div className="about-us-image-container">
        <img
          src="/images/about-us.jpg"
          alt="About Us"
          className="about-us-image"
        />
      </div>

      
      <div className="about-us-text">
        <p>
          Welcome to the Dog Training Club, where we are passionate about
          strengthening the bond between dogs and their owners. Our mission is
          to provide high-quality training programs tailored to the needs of
          both beginners and experienced dog owners.
        </p>
        <p>
          Whether you’re looking to teach your puppy basic obedience, improve
          your dog’s behavior, or train for advanced agility, we have a course
          for you. With experienced trainers, state-of-the-art facilities, and
          a supportive community, we ensure you and your furry friend have the
          best experience.
        </p>
        <p>
          Join us today and take the first step toward a happier, healthier
          relationship with your dog!
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
