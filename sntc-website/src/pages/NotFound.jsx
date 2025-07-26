import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-visual">
          <div className="error-code">
            <span className="digit">4</span>
            <span className="digit glitch">0</span>
            <span className="digit">4</span>
          </div>
          <div className="floating-elements">
            <div className="element" style={{animationDelay: '0s'}}>💻</div>
            <div className="element" style={{animationDelay: '1s'}}>🔧</div>
            <div className="element" style={{animationDelay: '2s'}}>⚡</div>
            <div className="element" style={{animationDelay: '0.5s'}}>🚀</div>
            <div className="element" style={{animationDelay: '1.5s'}}>💡</div>
            <div className="element" style={{animationDelay: '2.5s'}}>🔬</div>
          </div>
        </div>
        
        <div className="error-text">
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-message">
            Oops! The page you're looking for seems to have wandered off into 
            the digital void. Our tech team is probably working on something amazing instead!
          </p>
          
          <div className="error-suggestions">
            <h3>What you can do:</h3>
            <ul>
              <li>Check if the URL is spelled correctly</li>
              <li>Go back to the previous page</li>
              <li>Visit our homepage to explore SnTC</li>
              <li>Contact our SysAdmins if you think this is an error</li>
            </ul>
          </div>
          
          <div className="error-actions">
            <Link to="/" className="primary-btn">
              <span className="btn-icon">🏠</span>
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="secondary-btn"
            >
              <span className="btn-icon">↶</span>
              Go Back
            </button>
            <Link to="/clubs" className="tertiary-btn">
              <span className="btn-icon">🏛️</span>
              Explore Clubs
            </Link>
          </div>
        </div>
      </div>
      
      {/* Fun Facts Section */}
      <div className="fun-facts">
        <h3>Did you know?</h3>
        <div className="facts-grid">
          <div className="fact-item">
            <span className="fact-icon">🔢</span>
            <p>The HTTP 404 error was named after room 404 at CERN, where the first web server was located!</p>
          </div>
          <div className="fact-item">
            <span className="fact-icon">🌐</span>
            <p>SnTC manages over 50+ servers and maintains 99.9% uptime across all services!</p>
          </div>
          <div className="fact-item">
            <span className="fact-icon">⚡</span>
            <p>Our development team pushes code updates faster than you can say "404"!</p>
          </div>
        </div>
      </div>
      
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="circuit-line" style={{animationDelay: '0s'}}></div>
        <div className="circuit-line" style={{animationDelay: '2s'}}></div>
        <div className="circuit-line" style={{animationDelay: '4s'}}></div>
        <div className="circuit-dot" style={{animationDelay: '1s'}}></div>
        <div className="circuit-dot" style={{animationDelay: '3s'}}></div>
        <div className="circuit-dot" style={{animationDelay: '5s'}}></div>
      </div>
    </div>
  );
};

export default NotFound;