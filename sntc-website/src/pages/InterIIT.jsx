import React from 'react';
import './InterIIT.css';

const InterIIT = () => {
  // Real achievements data from SNTC website
  const achievements = [
    {
      year: "2023",
      position: "11th",
      event: "IIT Tech Meet 12.0",
      description: "Overall ranking in Inter IIT Tech Meet 12.0",
      medals: [
        {
          type: "Bronze",
          event: "Mphasis Foundation - Quantum Computing Challenge",
          team: "Rishi Mittal, Sukhvansh Jain, Ashmit Ojha, Aridaman Singh Chauhan, Achal Jain, Bipanjit Singh",
          description: "Developed hybrid classical-quantum computing solution for airline passenger recovery"
        }
      ]
    },
    {
      year: "2022",
      position: "9th",
      event: "Pan IIT Tech Meet 11.0",
      description: "Overall ranking in Pan IIT Tech Meet 11.0",
      medals: [
        {
          type: "Gold",
          event: "IGDC's GameDev Challenge",
          team: "Alhad P Chatur, Arjun Mehra, Aditya Sahu, Ravi Shirsat, Swarnarup Bhunia, Rishabh Shrival"
        },
        {
          type: "Silver",
          event: "Drona Aviations's Pluto Drone Swarm Challenge",
          team: "Lakshay Wadhwani, Bhuvan Narula, Aditya Ray Mishra, Yash Vardhan Sagar, Vattsal Hariramani"
        },
        {
          type: "Silver", 
          event: "Quantinsti's Price Action Trading Strategies",
          team: "Pratiksha Jain, Kratika Gupta, Aryan Goyal, Vineet Ahuja, Rohan"
        },
        {
          type: "Bronze",
          event: "DevRev's Expert Answers Challenge",
          team: "Samvaidan Salgotra, Vansh Kodesia, Ekansh Singh, Tarash Sambhar, Akarshan Kapoor"
        },
        {
          type: "Bronze",
          event: "Paradime.io's Product Challenge", 
          team: "Surinderpal Singh, Nayan Kharkar, Harshit Kalra, Gyanjyoti Kalita"
        }
      ]
    },
    {
      year: "2021",
      position: "Top 10",
      event: "Inter IIT Tech Meet 10.0",
      description: "Strong performance across multiple challenges",
      medals: [
        {
          type: "Silver",
          event: "Blue Yonder's Next Gen Optimized Delivery System",
          team: "Surendra Singh, Rajat Bansal, Kanishk Garg, Aniket Sukhija, Palak Sharma"
        },
        {
          type: "Bronze",
          event: "Silicon Labs SE Challenge",
          team: "Anurag Maurya, Shashwat Gupta, Shalu, Lalit Narayan Mudgal, Ankit Karan"
        }
      ]
    },
    {
      year: "2020",
      position: "Top 10",
      event: "Inter IIT Tech Meet 9.0", 
      description: "Excellent performance with multiple medals",
      medals: [
        {
          type: "Gold",
          event: "QuantInsti Algorithmic Trading",
          team: "Aryan Goyal, Vineet Ahuja, Dheeraj Yadav, Sanskar Gupta, Anshika Bajpai"
        },
        {
          type: "Silver",
          event: "SaptangLabs Security Hackathon",
          team: "Milind Topno, Yash Bansod, Pranshu Kharkwal, Dhruv Pindawala, Divyasheel Kumar"
        },
        {
          type: "Bronze",
          event: "Bridge i2i Automated Headline Generator",
          team: "Abhijeet Manhas, Khyati Agarwal, Piyush Goyal, Prakhar Uniyal, Naman Tayal"
        }
      ]
    },
    {
      year: "2019",
      position: "Top 10",
      event: "Inter IIT Tech Meet 8.0",
      description: "Historic performance with multiple achievements",
      medals: [
        {
          type: "Gold",
          event: "Coding Hackathon",
          team: "Aashish Kumar, Chirag Vashisht, Milind Topno, Vipul Sharma"
        },
        {
          type: "Bronze",
          event: "Case Study Challenge",
          team: "Param Kashyap, Rohit Bhamu, Yuvraj Misra"
        },
        {
          type: "Bronze",
          event: "BitGrit DataScience Challenge", 
          team: "Abhijeet Manhas, Dipanshu Verma, Nidhi Jain, Shubhamkumar Pandey"
        },
        {
          type: "Bronze",
          event: "Route Optimization Algorithm",
          team: "Akash Dakoor, Palak Gupta, Shreyas Bapat"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Inter IIT Tech Meet 13.0",
      date: "December 2024",
      location: "IIT Bombay",
      status: "Upcoming"
    },
    {
      title: "Inter IIT Sports Meet 2024",
      date: "February 2025",
      location: "IIT Delhi", 
      status: "Upcoming"
    }
  ];

  const getMedalColorClass = (type) => {
    switch(type.toLowerCase()) {
      case 'gold': return 'medal-gold';
      case 'silver': return 'medal-silver';
      case 'bronze': return 'medal-bronze';
      default: return 'medal-default';
    }
  };

  const getPositionClass = (position) => {
    if (position.includes('1')) return 'pos-first';
    if (position.includes('2')) return 'pos-second';
    if (position.includes('3')) return 'pos-third';
    return 'pos-top';
  };

  return (
    <div className="interiit-container">
      {/* Hero Section */}
      <section className="interiit-hero">
        <div className="hero-content">
          <h1 className="hero-title">Inter IIT Tech Meet</h1>
          <p className="hero-subtitle">
            Representing IIT Mandi at the prestigious Inter IIT competitions
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Competitions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Participants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Awards</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <h3>Excellence</h3>
              <p>in Competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Inter IIT */}
      <section className="about-interiit">
        <div className="container">
          <h2 className="section-title">About Inter IIT</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Inter IIT competitions are the most prestigious events where the best minds 
                from all IITs come together to compete in various domains including technology, 
                sports, and cultural activities.
              </p>
              <p>
                IIT Mandi has consistently performed well in these competitions, showcasing 
                our students' excellence in innovation, technical skills, and collaborative 
                problem-solving.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <h3>Competitive Excellence</h3>
                <p>Striving for top positions in all categories</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Team Collaboration</h3>
                <p>Building strong teams across disciplines</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h3>Innovation Focus</h3>
                <p>Bringing cutting-edge solutions to competitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-header">
                  <div className="achievement-info">
                    <span className="achievement-year">{achievement.year}</span>
                    <h3 className="achievement-event">{achievement.event}</h3>
                  </div>
                  <span className={`achievement-position ${getPositionClass(achievement.position)}`}>
                    {achievement.position}
                  </span>
                </div>
                <p className="achievement-desc">{achievement.description}</p>
                
                {achievement.medals && (
                  <div className="medals-section">
                    <h4 className="medals-title">Medal Winners:</h4>
                    <div className="medals-grid">
                      {achievement.medals.map((medal, medalIndex) => (
                        <div key={medalIndex} className={`medal-card ${getMedalColorClass(medal.type)}`}>
                          <div className="medal-header">
                            <span className={`medal-badge ${getMedalColorClass(medal.type)}`}>
                              {medal.type}
                            </span>
                            <span className="medal-event">{medal.event}</span>
                          </div>
                          {medal.description && (
                            <p className="medal-description">
                              {medal.description}
                            </p>
                          )}
                          <p className="medal-team">
                            <strong>Team:</strong> {medal.team}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-status">{event.status}</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Info */}
      <section className="participation-info">
        <div className="container">
          <div className="info-card">
            <h2>Want to Participate?</h2>
            <p>
              Join our Inter-IIT preparation teams and get the opportunity to represent IIT Mandi at prestigious national-level competitions.
              We welcome enthusiastic students from all branches and years who are passionate about learning, teamwork, and achieving excellence.
            </p>
            <div className="info-actions">
              <button className="primary-btn">Join Team</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterIIT;