import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt, FaEye, FaPlus, FaMoneyBillWaveAlt, FaListAlt, FaUserCircle } from 'react-icons/fa';
import './StudentDash.css';
import Footer from './Footer';
const AdminDash = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic
    navigate('/');
  };

  return (
    <div className='page1'>
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="nav-item">
            <Link to="/student-profile" className="sidebar-link">
              <FaUserCircle className="sidebar-icon" />
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            {/* Update link to navigate to '/my-cart' */}
            <Link to="/my-cart" className="sidebar-link">
              <FaUser className="sidebar-icon" />
              My Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/to-do" className="sidebar-link">
              <FaCog className="sidebar-icon" />
              My to-do List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/my-progress" className="sidebar-link">
              <FaMoneyBillWaveAlt className="sidebar-icon" />
              My Progress
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <span className="nav-title">...               ..  Student</span>
          </div>
          <ul className="navbar-nav">
            {/* <li className="nav-item"> */}
              {/* Logout Button */}
              <button className="nav-link logout-link" onClick={handleLogout}>
                <FaSignOutAlt className="nav-icon" />
                Logout
              </button>
            {/* </li> */}
          </ul>
        </nav>

        {/* Admin Dashboard Container */}
        <div className="admin-dash-container">
          {/* First Row */}
          <div className="admin-row">
            <div className="admin-box add-course">
              <Link to="/view-course" className="admin-link">
                <FaEye className="admin-icon" />
                View Course
              </Link>
            </div>
            <div className="admin-box view-courses">
              <Link to="/add-enquiry" className="admin-link">
                <FaPlus className="admin-icon" />
                Add Enquiry
              </Link>
            </div>
          </div>
          {/* Second Row */}
          <div className="admin-row">
            <div className="admin-box view-enquiries">
              <Link to="/view-enquiry " className="admin-link">
                <FaListAlt className="admin-icon" />
                View Enquiries
              </Link>
            </div>
            <div className="admin-box view-payments">
              <Link to="/my-course" className="admin-link">
                <FaMoneyBillWaveAlt className="admin-icon" />
                My Courses
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default AdminDash;