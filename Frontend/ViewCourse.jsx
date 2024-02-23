import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import './ViewCourse.css';

const ViewCourse = () => {
  const navigate = useNavigate(); // Initializing the navigate function
  const [showPopup, setShowPopup] = useState(false);
  const [addedCourse, setAddedCourse] = useState(null);

  const courseData = [
    {
      id: 1,
      name: 'IELTS Preparation Course',
      description: 'Comprehensive course to prepare for the IELTS exam',
      details: 'Includes practice tests and exam strategies',
      price: '₹999',
    },
    {
      id: 2,
      name: 'TOEFL Mastery Program',
      description: 'Advanced program to master TOEFL exam skills',
      details: 'Interactive lessons and mock exams',
      price: '₹1299',
    },
    {
      id: 3,
      name: 'Cambridge English: First (FCE)',
      description: 'Prepare for the Cambridge English: First (FCE) exam',
      details: 'Focused training on all exam components',
      price: '₹899',
    },
    {
      id: 4,
      name: 'British Council Language Proficiency',
      description: 'Certify your English proficiency with British Council',
      details: 'Internationally recognized certification',
      price: '₹1499',
    },
    {
      id: 5,
      name: 'Trinity College London Exams',
      description: 'Prepare for Trinity College London English exams',
      details: 'Structured course for all exam levels',
      price: '₹1099',
    },
    {
      id: 6,
      name: 'Advanced Grammar Course',
      description: 'Master advanced grammar concepts in English',
      details: 'Suitable for learners at an intermediate level and above',
      price: '₹799',
    },
    
  ];

  const handleAddToCart = (course) => {
    setAddedCourse(course);
    setShowPopup(true);
  };

  const handleGoBack = () => {
    navigate('/student-dash'); // Navigating back to admin dashboard
  };

  return (
    <div className="course-container">
      {courseData.map(course => (
        <div key={course.id} className="course-item">
          <FaCertificate className="course-icon" />
          <h3 className="course-name">{course.name}</h3>
          <p className="course-description">{course.description}</p>
          <p className="course-price">Price: {course.price}</p>
          <p className="course-details">Details: {course.details}</p>
          <button 
            onClick={() => handleAddToCart(course)} 
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              backgroundColor: 'transparent', // Transparent background
              color: '#fd6c5f', // Icon color
              border: '1px solid #fd6c5f', // Border color same as icon color
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <h2 className="popup-title">Course Added</h2>
            <p className="popup-message">{addedCourse.name} has been added to your cart.</p>
            <button className="popup-close-button" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="go-back-container">
        <button 
          className="go-back-button" 
          onClick={handleGoBack}
          style={{
            padding: '8px 16px',
            backgroundColor: '#333', // Dark gray color
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ViewCourse;