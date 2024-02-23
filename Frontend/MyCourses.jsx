import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
  // Dummy data for courses with progress
  const courses = [
    { name: 'English Grammar', progress: 60, description: 'This course covers the fundamentals of English grammar.' },
    { name: 'Business Communication', progress: 40, description: 'Learn effective communication strategies for the business environment.' },
    { name: 'Literature 101', progress: 80, description: 'Explore classic and contemporary works of literature.' },
    { name: 'Creative Writing', progress: 20, description: 'Unlock your creativity and express yourself through writing.' },
    { name: 'Public Speaking', progress: 50, description: 'Develop confidence and eloquence in public speaking situations.' },
    { name: 'Resume Writing', progress: 0, description: 'Craft an impressive resume to stand out to potential employers.' },
    { name: 'Advanced Grammar', progress: 30, description: 'Delve deeper into the nuances of English grammar.' },
    { name: 'Professional Writing', progress: 70, description: 'Master the art of professional writing for various contexts.' },
    { name: 'Effective Presentations', progress: 90, description: 'Learn techniques to deliver impactful presentations.' }
  ];

  // State to manage which course description to show
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  // Function to toggle selected course description
  const toggleDescription = (index) => {
    if (selectedCourse === index) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(index);
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#000' }}>My Courses</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {courses.map((course, index) => (
          <div 
            key={index} 
            style={{ 
              width: '200px', 
              margin: '20px', 
              padding: '20px', 
              backgroundColor: '#fff', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              transform: selectedCourse === index ? 'scale(1.05)' : 'scale(1)'
            }}
            onClick={() => toggleDescription(index)}
          >
            <h3 style={{ fontSize: '20px', color: '#000', marginBottom: '10px' }}>{course.name}</h3>
            <div style={{ backgroundColor: '#ddd', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${course.progress}%`, backgroundColor: '#000', height: '100%', borderRadius: '4px', transition: 'width 0.5s ease-in-out' }}></div>
            </div>
            {selectedCourse === index && (
              <p style={{ marginTop: '10px', color: '#000' }}>{course.description}</p>
            )}
            {course.progress > 0 && selectedCourse === index && (
              <button style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Resume</button>
            )}
            {course.progress === 0 && selectedCourse === index && (
              <button style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Start Now</button>
            )}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={() => navigate('/student-dash')}>Back</button>
      </div>
    </div>
  );
};

export default MyCourses;
