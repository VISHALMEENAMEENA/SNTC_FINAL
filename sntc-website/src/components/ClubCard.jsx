import React, { useState } from 'react';
import './ClubCard.css';

const ClubCard = ({ club }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Remove the current card-wide onClick handler
  // and add an onClick for the button only.

  const getClubIcon = (clubName) => {
    const icons = {
      'Programming Club': 'fas fa-code',
      'Robotronics Club': 'fas fa-robot',
      'Entrepreneurship Cell': 'fas fa-lightbulb',
      'Yantrik Club': 'fas fa-cogs',
      'Nirmaan Club': 'fas fa-building',
      'STAC': 'fas fa-rocket',
      'KBG': 'fas fa-dna',
      'SAE': 'fas fa-car',
      'SysAdmins': 'fas fa-server',
      'Default': 'fas fa-users'
    };

    return icons[clubName] || icons['Default'];
  };

  // New button click handler for opening the club website
  const handleVisitWebsiteClick = (e) => {
    e.stopPropagation(); // prevent any parent click handlers
    if (club.website) {
      window.open(club.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`club-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Removed onClick from here to disable card-wide navigation
    >
      {/* Card Background Gradient */}
      <div className="card-background"></div>

      {/* Card Header */}
      <div className="card-header">
        <div className="club-icon">
          <i className={getClubIcon(club.name)}></i>
        </div>
        <div className="club-status">
          <span className="status-dot"></span>
          Active
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h3 className="club-name">{club.name}</h3>
        <p className="club-description">{club.description}</p>

        {/* Club Stats */}
        {club.stats && (
          <div className="club-stats">
            {club.stats.members && (
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <span>{club.stats.members} Members</span>
              </div>
            )}
            {club.stats.projects && (
              <div className="stat-item">
                <i className="fas fa-project-diagram"></i>
                <span>{club.stats.projects} Projects</span>
              </div>
            )}
            {club.stats.events && (
              <div className="stat-item">
                <i className="fas fa-calendar"></i>
                <span>{club.stats.events} Events</span>
              </div>
            )}
          </div>
        )}

        {/* Club Tags */}
        {club.tags && (
          <div className="club-tags">
            {club.tags.map((tag, index) => (
              <span key={index} className="club-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        {/* Make this button the only clickable element for website visit */}
        <button
          className="visit-btn"
          onClick={handleVisitWebsiteClick}
          aria-label={`Visit ${club.name} website`}
        >
          <span>Visit Website</span>
          <i className="fas fa-external-link-alt"></i>
        </button>

        {club.socialMedia && (
          <div className="social-icons">
            {club.socialMedia.instagram && (
              <a
                href={club.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="social-icon"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {club.socialMedia.linkedin && (
              <a
                href={club.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {club.socialMedia.github && (
              <a
                href={club.socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Effect Elements */}
      <div className="hover-elements">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {/* Shine Effect */}
      <div className="shine-effect"></div>
    </div>
  );
};

export default ClubCard;
