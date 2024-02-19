import React, { useState } from 'react';
import './StudentLogin.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error state
    setError('');

    // Perform validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Your login logic goes here
    console.log('Login credentials:', { email, password });
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Student Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          Dont have an account? <Link to="/student-register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
