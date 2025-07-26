import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './OfferingDetail.css';

const OfferingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const offerings = [
    {
      id: 'mars-rover',
      title: 'Mars Rover Project',
      description: 'Designing and building mars rover capable of traversing uneven terrain and performing variety of manipulations for University Rover Challenge (URC)',
      fullDescription: 'Our Mars Rover project aims to design and build a sophisticated rover capable of navigating the challenging terrain of Mars. The rover incorporates advanced mobility systems, robotic arms for sample collection, and autonomous navigation capabilities. This project prepares us for the prestigious University Rover Challenge (URC), where we compete against top universities worldwide.',
      budget: '₹2,01,000',
      teamLead: 'Bhuvan Narula',
      category: 'Robotics',
      icon: 'fas fa-robot',
      status: 'Active',
      timeline: '12 months',
      technologies: ['ROS', 'Computer Vision', 'Autonomous Navigation', 'Robotic Arms', 'Path Planning', 'Sensor Fusion'],
      achievements: ['URC Qualification', 'Regional Winner', 'Best Design Award'],
      teamMembers: [
        { name: 'Bhuvan Narula', role: 'Team Lead', avatar: '/api/placeholder/50/50' },
        { name: 'Ananya Singh', role: 'Mechanical Engineer', avatar: '/api/placeholder/50/50' },
        { name: 'Rohit Kumar', role: 'Software Developer', avatar: '/api/placeholder/50/50' },
        { name: 'Priya Sharma', role: 'Electronics Engineer', avatar: '/api/placeholder/50/50' }
      ],
      milestones: [
        { title: 'Design Phase', status: 'completed', date: 'Jan 2024' },
        { title: 'Prototype Development', status: 'completed', date: 'Mar 2024' },
        { title: 'Testing Phase', status: 'active', date: 'Jul 2024' },
        { title: 'URC Competition', status: 'upcoming', date: 'May 2025' }
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      specifications: {
        'Weight': '50 kg',
        'Dimensions': '1.2m x 0.8m x 0.6m',
        'Power': 'Solar + Battery',
        'Communication': 'Radio Frequency',
        'Sensors': 'Camera, Lidar, IMU',
        'Mobility': '6-wheel rocker-bogie'
      }
    }
    // Add other offerings here with similar detailed structure
  ];

  const offering = offerings.find(o => o.id === id);

  if (!offering) {
    return (
      <div className="offering-not-found">
        <div className="container">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/offerings" className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Back to Offerings
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10B981';
      case 'Completed': return '#3B82F6';
      case 'Planning': return '#F59E0B';
      case 'Research': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getMilestoneStatus = (status) => {
    switch (status) {
      case 'completed': return { color: '#10B981', icon: 'fas fa-check-circle' };
      case 'active': return { color: '#F59E0B', icon: 'fas fa-clock' };
      case 'upcoming': return { color: '#6B7280', icon: 'fas fa-circle' };
      default: return { color: '#6B7280', icon: 'fas fa-circle' };
    }
  };

  return (
    <div className={`offering-detail-page ${isVisible ? 'visible' : ''}`}>
      {/* Navigation */}
      <div className="detail-nav">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div className="nav-links">
            <Link to="/offerings">All Projects</Link>
            <span className="separator">/</span>
            <span className="current">{offering.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="detail-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-main">
              <div className="project-icon">
                <i className={offering.icon}></i>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="category">{offering.category}</span>
                  <div className="status" style={{ backgroundColor: getStatusColor(offering.status) }}>
                    {offering.status}
                  </div>
                </div>
                <h1>{offering.title}</h1>
                <p>{offering.description}</p>
                <div className="quick-stats">
                  <div className="stat">
                    <i className="fas fa-money-bill-wave"></i>
                    <span>{offering.budget}</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-clock"></i>
                    <span>{offering.timeline}</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-users"></i>
                    <span>{offering.teamMembers.length} members</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={offering.gallery[0]} alt={offering.title} />
              <div className="image-overlay">
                <button className="view-gallery-btn">
                  <i className="fas fa-images"></i>
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <i className="fas fa-info-circle"></i>
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <i className="fas fa-users"></i>
              Team
            </button>
            <button 
              className={`tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('progress')}
            >
              <i className="fas fa-chart-line"></i>
              Progress
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              <i className="fas fa-cog"></i>
              Specifications
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="tab-content-section">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content overview-content">
              <div className="content-grid">
                <div className="main-content">
                  <h2>Project Overview</h2>
                  <p>{offering.fullDescription}</p>
                  
                  <h3>Technologies Used</h3>
                  <div className="technologies-grid">
                    {offering.technologies.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <i className="fas fa-check"></i>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  <h3>Key Achievements</h3>
                  <div className="achievements-list">
                    {offering.achievements.map((achievement, index) => (
                      <div key={index} className="achievement-item">
                        <i className="fas fa-trophy"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="sidebar-content">
                  <div className="info-card">
                    <h4>Project Details</h4>
                    <div className="detail-item">
                      <span className="label">Team Lead:</span>
                      <span className="value">{offering.teamLead}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Budget:</span>
                      <span className="value">{offering.budget}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Timeline:</span>
                      <span className="value">{offering.timeline}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Status:</span>
                      <span className="value" style={{ color: getStatusColor(offering.status) }}>
                        {offering.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="tab-content team-content">
              <h2>Project Team</h2>
              <div className="team-grid">
                {offering.teamMembers.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <div className="member-avatar">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                    <div className="member-actions">
                      <button className="contact-btn">
                        <i className="fas fa-envelope"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="join-team-cta">
                <h3>Interested in Joining?</h3>
                <p>We're always looking for passionate individuals to join our team.</p>
                <button className="join-btn">
                  <i className="fas fa-plus"></i>
                  Express Interest
                </button>
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="tab-content progress-content">
              <h2>Project Timeline</h2>
              <div className="timeline">
                {offering.milestones.map((milestone, index) => {
                  const statusInfo = getMilestoneStatus(milestone.status);
                  return (
                    <div key={index} className={`timeline-item ${milestone.status}`}>
                      <div className="timeline-marker" style={{ color: statusInfo.color }}>
                        <i className={statusInfo.icon}></i>
                      </div>
                      <div className="timeline-content">
                        <h4>{milestone.title}</h4>
                        <span className="timeline-date">{milestone.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specs' && (
            <div className="tab-content specs-content">
              <h2>Technical Specifications</h2>
              <div className="specs-grid">
                {Object.entries(offering.specifications).map(([key, value], index) => (
                  <div key={index} className="spec-item">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <section className="related-projects">
        <div className="container">
          <h2>Related Projects</h2>
          <div className="related-grid">
            {offerings.filter(o => o.category === offering.category && o.id !== offering.id).slice(0, 3).map((related, index) => (
              <Link key={related.id} to={`/offerings/${related.id}`} className="related-card">
                <div className="related-image">
                  <img src={related.gallery[0]} alt={related.title} />
                  <div className="related-icon">
                    <i className={related.icon}></i>
                  </div>
                </div>
                <div className="related-content">
                  <h4>{related.title}</h4>
                  <p>{related.description.substring(0, 100)}...</p>
                  <div className="related-meta">
                    <span className="budget">{related.budget}</span>
                    <span className="status" style={{ color: getStatusColor(related.status) }}>
                      {related.status}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferingDetail;