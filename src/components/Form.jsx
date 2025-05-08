import React, { useState } from "react";
import "../styles/form.css";

function Form() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    age: "",
    petBreed: "",
    courseType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validate = () => {
    const newErrors = {};

    
    ["name", "email", "phone", "petName", "age", "courseType"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Please fill the required information.";
      }
    });

    
    if (formData.email && !formData.email.endsWith(".com")) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true); 
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Register Form</h1> 
      {!submitted ? (
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label>Name: <span className="required">*required</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email: <span className="required">*required</span></label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone Number: <span className="required">*required</span></label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Pet Name: <span className="required">*required</span></label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
            />
            {errors.petName && <span className="error">{errors.petName}</span>}
          </div>

          <div className="form-group">
            <label>Age: <span className="required">*required</span></label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>

          <div className="form-group">
            <label>Pet Breed:</label>
            <input
              type="text"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Course Type: <span className="required">*required</span></label>
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
              <option value="Premium">Premium</option>
            </select>
            {errors.courseType && <span className="error">{errors.courseType}</span>}
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thank you for registering!</h3>
          <p>We have received your information successfully.</p>
        </div>
      )}
    </div>
  );
}

export default Form;
