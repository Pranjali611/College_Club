import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import './LoginSignup.css';

function LoginSignup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.classList.add('form-submitted');
    setTimeout(() => {
      console.log('Form submitted:', formData);
      form.classList.remove('form-submitted');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <div className="background-pattern" />
      <div className="form-wrapper">
        <div className="decorative-side">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
          <div className="welcome-text">
            <h2>Welcome Back</h2>
            <p>Enter your details to continue your journey</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-content">
            <div className="form-header">
              <h1>Sign In</h1>
            </div>

            <div className="form-fields">
              <div className="input-group">
                <div className="icon">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <div className="input-line" />
              </div>

              <div className="input-group">
                <div className="icon">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="input-line" />
              </div>

              <div className="input-group">
                <div className="icon">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="input-line" />
              </div>

              <button type="submit" className="submit-button">
                <span>Sign In</span>
                <ArrowRight className="arrow-icon" size={20} />
              </button>
            </div>

            <div className="form-footer">
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <p className="signup-text">
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
