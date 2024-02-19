import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TitlePage.css'; // Importing the CSS file
import { FaFlag, FaGraduationCap } from 'react-icons/fa'; // Importing flag and graduation cap icons

function TitlePage() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  const handleStudentClick = () => {
    navigate('/student-register');
  };

  return (
    <div className="title-container">
      <div className="title-box">
        <h1 className="main-title">British English </h1>
        <h1 className="main-title">Certification</h1>
        <br></br>
        <br></br>
        
        
        <div className="button-wrapper">
          <button className="main-button" onClick={handleAdminClick}><FaFlag /> Admin</button>
          <button className="main-button" onClick={handleStudentClick}><FaGraduationCap /> Student</button>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default TitlePage;
