import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import './AdminDash.css';

const AdminDash = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="nav-title">BEC ADMIN</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* Logout Button */}
            <button className="nav-link logout-link" onClick={handleLogout}>
              <IoLogOutOutline className="nav-icon" />
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Admin Dashboard Container */}
      <div className="admin-dash-container">
        {/* Admin Boxes */}
        <div className="admin-box">
          {/* Link to Add Course Page */}
          <Link to="/add-course" className="admin-link">Add Course</Link>
        </div>
        <div className="admin-box">
          {/* Link to View Courses Page */}
          <Link to="/view-courses" className="admin-link">View Courses</Link>
        </div>
        <div className="admin-box">
          {/* Link to View Enquiries Page */}
          <Link to="/view-enquiries" className="admin-link">View Enquiries</Link>
        </div>
        <div className="admin-box">
          {/* Link to View Payments Page */}
          <Link to="/view-payments" className="admin-link">View Payments</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
