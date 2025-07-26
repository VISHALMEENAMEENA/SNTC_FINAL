import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Cell.css';

const Cell = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cells = [
    {
      id: 'stac',
      name: 'Space Technology and Astronomy Cell (STAC)',
      shortName: 'STAC',
      description: 'Making students familiar with everything related to Astronomy, Space and Open Source development in the field of Space Technology.',
      fullDescription: 'STAC aims at making students familiar with everything related to Astronomy, Space and Open Source development in the field of Space Technology. The club has 2 telescopes, a 12" telescope under construction, a pair of binoculars and organizes frequent star-gazing sessions and undertakes several interesting technical projects. We foster curiosity about the cosmos and provide hands-on experience with cutting-edge space technology.',
      icon: 'fas fa-rocket',
      color: '#FF6B6B',
      website: 'http://stac.iitmandi.co.in/',
      features: ['2 Telescopes', '12" Telescope Under Construction', 'Star-gazing Sessions', 'Space Projects'],
      activities: [
        'Weekly star-gazing sessions',
        'Astrophotography workshops',
        'Satellite tracking projects',
        'Space mission simulations',
        'Rocket building competitions'
      ],
      equipment: [
        { name: 'Celestron Telescope', description: '8-inch Schmidt-Cassegrain telescope for deep-sky observations' },
        { name: 'Refractor Telescope', description: '6-inch refractor for planetary observations' },
        { name: 'CCD Camera', description: 'High-resolution camera for astrophotography' },
        { name: 'Radio Telescope', description: 'Custom-built radio telescope for radio astronomy' }
      ],
      achievements: [
        'NASA Space Apps Challenge Winner 2023',
        'National Astronomy Olympiad - 5 Qualifiers',
        'Published 3 research papers in astronomy journals',
        'Built and launched 2 model rockets successfully'
      ],
      members: [
        { name: 'Aditya Verma', role: 'President', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Sneha Patel', role: 'Vice President', year: '2nd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Rahul Singh', role: 'Technical Head', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Ananya Kumar', role: 'Outreach Coordinator', year: '2nd Year', avatar: '/api/placeholder/60/60' }
      ],
      events: [
        { name: 'Astro Night 2024', date: 'March 15, 2024', type: 'Star-gazing' },
        { name: 'Space Quiz Competition', date: 'April 8, 2024', type: 'Competition' },
        { name: 'Astrophotography Workshop', date: 'May 12, 2024', type: 'Workshop' }
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 'saic',
      name: 'System Administration and Infosec Cell (SAIC)',
      shortName: 'SAIC',
      description: 'Our team of cyber enthusiasts excels in Capture The Flag (CTF) competitions and cybersecurity challenges.',
      fullDescription: 'SAIC is dedicated to cybersecurity, system administration, and information security. Our team of cyber enthusiasts regularly participates in national and international CTF competitions, conducts security audits, and promotes cybersecurity awareness on campus. We work on cutting-edge projects in penetration testing, malware analysis, and secure system design.',
      icon: 'fas fa-shield-alt',
      color: '#4ECDC4',
      website: '#',
      features: ['CTF Competitions', 'Penetration Testing', 'Security Audits', 'Malware Analysis'],
      activities: [
        'Weekly CTF practice sessions',
        'Security workshops and seminars',
        'Campus network security audits',
        'Bug bounty hunting',
        'Cybersecurity awareness programs'
      ],
      equipment: [
        { name: 'Penetration Testing Lab', description: 'Dedicated lab with vulnerable systems for ethical hacking practice' },
        { name: 'Network Security Tools', description: 'Professional tools for network analysis and security testing' },
        { name: 'Malware Analysis Sandbox', description: 'Isolated environment for safe malware research' },
        { name: 'CTF Practice Platform', description: 'Custom platform for practicing cybersecurity challenges' }
      ],
      achievements: [
        'National rank 12 in TCS HackQuest 2023',
        'Winner of IIT Delhi CyberSecurity CTF',
        'Organized successful Bug Bounty workshop',
        'Identified 15+ security vulnerabilities in campus systems'
      ],
      members: [
        { name: 'Vikash Kumar', role: 'President', year: '4th Year', avatar: '/api/placeholder/60/60' },
        { name: 'Priya Sharma', role: 'CTF Team Lead', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Arjun Malhotra', role: 'Red Team Lead', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Kavya Reddy', role: 'Blue Team Lead', year: '2nd Year', avatar: '/api/placeholder/60/60' }
      ],
      events: [
        { name: 'CyberSec CTF 2024', date: 'February 20, 2024', type: 'Competition' },
        { name: 'Ethical Hacking Workshop', date: 'March 25, 2024', type: 'Workshop' },
        { name: 'Security Awareness Week', date: 'April 15-22, 2024', type: 'Awareness' }
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 'cg2d',
      name: 'Computer Graphics and Game Development (CG2D)',
      shortName: 'CG2D',
      description: 'A community for digital creativity and interactive entertainment focusing on 3D modeling, animation, and game design.',
      fullDescription: 'CG2D is where creativity meets technology. We focus on computer graphics, 3D modeling, animation, and game development. Our members work on projects ranging from indie games to AAA-quality 3D models, participate in game jams, and explore the latest in VR/AR technology. We provide a platform for students to express their creativity through digital art and interactive media.',
      icon: 'fas fa-gamepad',
      color: '#45B7D1',
      website: '#',
      features: ['3D Modeling', 'Game Development', 'Animation', 'VR/AR Development'],
      activities: [
        'Monthly game jams',
        '3D modeling competitions',
        'Animation workshops',
        'VR/AR development sessions',
        'Digital art exhibitions'
      ],
      equipment: [
        { name: 'High-end Workstations', description: 'Powerful computers with dedicated graphics cards for 3D work' },
        { name: 'VR Headsets', description: 'Oculus Rift and HTC Vive for VR development and testing' },
        { name: 'Graphics Tablets', description: 'Wacom tablets for digital art and design work' },
        { name: 'Motion Capture Setup', description: 'Basic mocap system for animation projects' }
      ],
      achievements: [
        'Winner of Global Game Jam 2023 - India',
        'Best Student Animation at Delhi Animation Festival',
        'Published 2 games on Steam platform',
        'Featured in top 10 VR projects at TechFest Mumbai'
      ],
      members: [
        { name: 'Rohit Gupta', role: 'President', year: '4th Year', avatar: '/api/placeholder/60/60' },
        { name: 'Maya Iyer', role: '3D Art Lead', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Karan Joshi', role: 'Game Dev Lead', year: '3rd Year', avatar: '/api/placeholder/60/60' },
        { name: 'Ishita Das', role: 'Animation Lead', year: '2nd Year', avatar: '/api/placeholder/60/60' }
      ],
      events: [
        { name: 'GameDev Workshop Series', date: 'January 10-12, 2024', type: 'Workshop' },
        { name: '48-Hour Game Jam', date: 'March 1-3, 2024', type: 'Competition' },
        { name: 'Digital Art Exhibition', date: 'April 18, 2024', type: 'Exhibition' }
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    }
  ];

  const cell = cells.find(c => c.id === id);

  if (!cell) {
    return (
      <div className="cell-not-found">
        <div className="container">
          <h2>Cell Not Found</h2>
          <p>The cell you're looking for doesn't exist.</p>
          <Link to="/" className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`cell-page ${isVisible ? 'visible' : ''}`}>
      {/* Navigation */}
      <div className="cell-nav">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">{cell.shortName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="cell-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-main">
              <div className="cell-icon" style={{ backgroundColor: cell.color }}>
                <i className={cell.icon}></i>
              </div>
              <div className="cell-info">
                <h1>{cell.name}</h1>
                <p>{cell.description}</p>
                <div className="hero-actions">
                  {cell.website !== '#' && (
                    <a href={cell.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
                      <i className="fas fa-external-link-alt"></i>
                      Visit Website
                    </a>
                  )}
                  <button className="join-btn">
                    <i className="fas fa-plus"></i>
                    Join Cell
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">{cell.members.length}+</span>
                <span className="label">Active Members</span>
              </div>
              <div className="stat">
                <span className="number">{cell.achievements.length}</span>
                <span className="label">Major Achievements</span>
              </div>
              <div className="stat">
                <span className="number">{cell.equipment.length}</span>
                <span className="label">Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="features-banner">
        <div className="container">
          <div className="features-list">
            {cell.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <i className="fas fa-check"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              <i className="fas fa-info-circle"></i>
              About
            </button>
            <button 
              className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
              onClick={() => setActiveTab('activities')}
            >
              <i className="fas fa-tasks"></i>
              Activities
            </button>
            <button 
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <i className="fas fa-users"></i>
              Team
            </button>
            <button 
              className={`tab-btn ${activeTab === 'equipment' ? 'active' : ''}`}
              onClick={() => setActiveTab('equipment')}
            >
              <i className="fas fa-tools"></i>
              Equipment
            </button>
            <button 
              className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              <i className="fas fa-images"></i>
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="tab-content-section">
        <div className="container">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="tab-content about-content">
              <div className="content-grid">
                <div className="main-content">
                  <h2>About {cell.shortName}</h2>
                  <p>{cell.fullDescription}</p>
                  
                  <h3>Key Achievements</h3>
                  <div className="achievements-list">
                    {cell.achievements.map((achievement, index) => (
                      <div key={index} className="achievement-item">
                        <i className="fas fa-trophy"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="sidebar-content">
                  <div className="upcoming-events">
                    <h4>Upcoming Events</h4>
                    {cell.events.map((event, index) => (
                      <div key={index} className="event-item">
                        <div className="event-date">
                          <span className="date">{event.date.split(',')[0]}</span>
                          <span className="year">{event.date.split(',')[1]}</span>
                        </div>
                        <div className="event-info">
                          <h5>{event.name}</h5>
                          <span className="event-type">{event.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="tab-content activities-content">
              <h2>Our Activities</h2>
              <div className="activities-grid">
                {cell.activities.map((activity, index) => (
                  <div key={index} className="activity-card">
                    <div className="activity-icon">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="activity-content">
                      <h4>{activity}</h4>
                      <p>Regular activity that helps members grow and learn new skills</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="join-activity-cta">
                <h3>Want to Participate?</h3>
                <p>Join us in our exciting activities and be part of our growing community.</p>
                <button className="participate-btn">
                  <i className="fas fa-hand-paper"></i>
                  Get Involved
                </button>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="tab-content team-content">
              <h2>Our Team</h2>
              <div className="team-grid">
                {cell.members.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <div className="member-avatar">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <p className="role">{member.role}</p>
                      <p className="year">{member.year}</p>
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
                <h3>Want to Join Our Team?</h3>
                <p>We welcome passionate individuals who share our vision and want to contribute.</p>
                <button className="apply-btn">
                  <i className="fas fa-user-plus"></i>
                  Apply Now
                </button>
              </div>
            </div>
          )}

          {/* Equipment Tab */}
          {activeTab === 'equipment' && (
            <div className="tab-content equipment-content">
              <h2>Our Equipment & Resources</h2>
              <div className="equipment-grid">
                {cell.equipment.map((item, index) => (
                  <div key={index} className="equipment-card">
                    <div className="equipment-icon">
                      <i className="fas fa-cog"></i>
                    </div>
                    <div className="equipment-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="equipment-status">
                      <span className="status-badge available">Available</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="equipment-request">
                <h3>Need Access to Equipment?</h3>
                <p>Members can request access to our equipment for projects and learning.</p>
                <button className="request-btn">
                  <i className="fas fa-clipboard-list"></i>
                  Request Access
                </button>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="tab-content gallery-content">
              <h2>Photo Gallery</h2>
              <div className="gallery-grid">
                {cell.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${cell.shortName} activity ${index + 1}`} />
                    <div className="gallery-overlay">
                      <button className="view-btn">
                        <i className="fas fa-expand"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <p>Have questions or want to learn more about {cell.shortName}? We'd love to hear from you!</p>
            <div className="contact-buttons">
              <button className="contact-btn primary">
                <i className="fas fa-envelope"></i>
                Send Email
              </button>
              <button className="contact-btn secondary">
                <i className="fas fa-comments"></i>
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cell;