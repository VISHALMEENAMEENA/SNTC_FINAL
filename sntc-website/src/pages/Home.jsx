import React, { useState, useEffect } from 'react';
import ClubCard from '../components/ClubCard';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredClubs = [
    {
      name: 'Programming Club',
      description: 'An enthusiastic coder? Here is the club for you. Dedicated to programming activities, competitions, and workshops to enhance coding skills.',
      website: 'http://pc.iitmandi.co.in/',
      tags: ['Programming', 'Competitive Coding', 'Web Dev'],
      stats: { members: '150+', projects: '25+', events: '30+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/kamandprompt/',
        github: 'https://github.com/pc-iitmandi'
      }
    },
    {
      name: 'Robotronics Club',
      description: 'Robotics + Electronics = Robotronics. Working in both robotics and electronics domains, providing workspace, tools, and expertise.',
      website: 'http://robotronics.iitmandi.co.in/',
      tags: ['Robotics', 'Electronics', 'Hardware'],
      stats: { members: '120+', projects: '20+', events: '25+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/robotronics_iitmandi/'
      }
    },
    {
      name: 'Entrepreneurship Cell',
      description: 'E-Cell fosters entrepreneurial spirit through various business-related events and activities, helping students explore the world of startups.',
      website: 'https://ecell.iitmandi.co.in/',
      tags: ['Business', 'Startups', 'Innovation'],
      stats: { members: '100+', projects: '15+', events: '20+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/ecell_iitmandi/',
        linkedin: 'https://www.linkedin.com/company/e-cell-iit-mandi'
      }
    }
  ];

  const achievements = [
    { title: 'Inter IIT Tech Meet', subtitle: '2024 Champions', icon: 'fas fa-trophy' },
    { title: 'National Competitions', subtitle: '50+ Wins', icon: 'fas fa-medal' },
    { title: 'Active Members', subtitle: '500+ Students', icon: 'fas fa-users' },
    { title: 'Technical Projects', subtitle: '100+ Completed', icon: 'fas fa-project-diagram' }
  ];

  const upcomingEvents = [
    { title: 'TechFest 2025', date: 'Mar 15', type: 'Festival' },
    { title: 'Hackathon', date: 'Mar 22', type: 'Competition' },
    { title: 'Workshop Series', date: 'Apr 05', type: 'Learning' }
  ];

  return (
    <div className={`home-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Science &</span>
              <span className="title-line">Technology</span>
              <span className="title-line highlight">Council</span>
            </h1>
            <p className="hero-subtitle">
              Where innovation meets excellence! The vibrant technical society of IIT Mandi, 
              fostering transformative advancements across countless fields.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                <span>Explore Clubs</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="cta-button secondary">
                <span>Join Community</span>
                <i className="fas fa-users"></i>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-rocket"></i>
                <h3>Innovation Hub</h3>
                <p>Pushing boundaries of technology</p>
              </div>
            </div>
            <div className="floating-card delay-1">
              <div className="card-content">
                <i className="fas fa-code"></i>
                <h3>8+ Tech Clubs</h3>
                <p>Diverse technical domains</p>
              </div>
            </div>
            <div className="floating-card delay-2">
              <div className="card-content">
                <i className="fas fa-trophy"></i>
                <h3>500+ Members</h3>
                <p>Active tech enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stat-icon">
                  <i className={achievement.icon}></i>
                </div>
                <div className="stat-content">
                  <h3>{achievement.subtitle}</h3>
                  <p>{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clubs Section */}
      <section className="featured-clubs-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Clubs</h2>
            <p>Discover our most active and innovative technical clubs</p>
          </div>
          
          <div className="clubs-grid">
            {featuredClubs.map((club, index) => (
              <div key={index} className="club-card-wrapper" style={{ animationDelay: `${index * 0.3}s` }}>
                <ClubCard club={club} />
              </div>
            ))}
          </div>
          
          <div className="section-footer">
            <button className="view-all-btn">
              <span>View All Clubs</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About SnTC</h2>
              <p>
                The Science and Technology Council (SnTC) is the beating heart of technical innovation 
                at IIT Mandi. We bring together passionate minds from diverse fields to create, innovate, 
                and push the boundaries of what's possible.
              </p>
              <p>
                Our unique approach embraces open participation - every student is welcome to join any club 
                at any time. This inclusive philosophy has helped us build a vibrant community of over 500 
                active members across 8+ specialized technical clubs.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <span>Open Participation</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-trophy"></i>
                  <span>National Recognition</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-project-diagram"></i>
                  <span>Real-world Projects</span>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="visual-container">
                <div className="orbit-ring ring-1">
                  <div className="orbit-item"><i className="fas fa-code"></i></div>
                </div>
                <div className="orbit-ring ring-2">
                  <div className="orbit-item"><i className="fas fa-robot"></i></div>
                  <div className="orbit-item orbit-opposite"><i className="fas fa-rocket"></i></div>
                </div>
                <div className="orbit-ring ring-3">
                  <div className="orbit-item"><i className="fas fa-cogs"></i></div>
                  <div className="orbit-item orbit-120"><i className="fas fa-dna"></i></div>
                  <div className="orbit-item orbit-240"><i className="fas fa-car"></i></div>
                </div>
                <div className="center-logo">
                  <span>SnTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Don't miss out on our exciting technical events and competitions</p>
          </div>
          
          <div className="events-timeline">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="event-date">
                  <span className="date">{event.date}</span>
                  <span className="year">2025</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <span className="event-type">{event.type}</span>
                </div>
                <div className="event-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Innovate?</h2>
            <p>Join our community of tech enthusiasts and be part of something extraordinary</p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <span>Join SnTC</span>
                <i className="fas fa-rocket"></i>
              </button>
              <button className="cta-button secondary">
                <span>Contact Us</span>
                <i className="fas fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;