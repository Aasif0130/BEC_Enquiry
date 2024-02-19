import React, { useState } from 'react';
import './AdminLogin.css'; // Import your CSS file here

const AdminLogin = () => {
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
    <div className="admin-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
        {error && <div className="admin-error-message">{error}</div>}
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
      </div>
    </div>
  );
};

export default AdminLogin;
