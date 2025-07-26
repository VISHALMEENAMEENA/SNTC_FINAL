import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Offerings.css';

const Offerings = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
      technologies: ['ROS', 'Computer Vision', 'Autonomous Navigation', 'Robotic Arms'],
      achievements: ['URC Qualification', 'Regional Winner', 'Best Design Award'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'efficycle',
      title: 'Efficycle Project',
      description: 'A versatile vehicle powered by both manual pedaling and battery-based electric power with unique tadpole configuration.',
      fullDescription: 'The Efficycle represents the future of sustainable transportation. This innovative vehicle combines human power with electric assistance, featuring a unique tadpole configuration with two front wheels and one rear wheel for enhanced stability. The vehicle can be powered manually, electrically, or through a hybrid approach, making it both environmentally friendly and practical for mountainous terrains.',
      budget: '₹2,47,000',
      teamLead: 'Keshav Verma',
      category: 'Automotive',
      icon: 'fas fa-bicycle',
      status: 'Active',
      timeline: '10 months',
      technologies: ['Electric Motors', 'Battery Management', 'Regenerative Braking', 'Lightweight Materials'],
      achievements: ['Prototype Completed', 'Energy Efficiency Award', 'Innovation Recognition'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'wall-climber',
      title: 'Wall Climber Robot',
      description: 'A robotic system designed to navigate vertical surfaces and ceilings using vacuum technology and suction cups.',
      fullDescription: 'The Wall Climber Robot is an innovative robotic system that defies gravity by navigating vertical surfaces and ceilings. Using advanced vacuum technology and specialized suction cups, this robot can perform inspection, maintenance, and surveillance tasks in environments that are hazardous or inaccessible to humans. Applications include industrial facility inspection, bridge maintenance, and security surveillance.',
      budget: '₹35,000',
      teamLead: 'Vaibhav Kesharwani',
      category: 'Robotics',
      icon: 'fas fa-spider',
      status: 'Completed',
      timeline: '6 months',
      technologies: ['Vacuum Technology', 'Suction Systems', 'Remote Control', 'Camera Integration'],
      achievements: ['Successful Prototype', 'Industry Interest', 'Patent Filed'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'formula-bharat',
      title: 'Formula Bharat Racing',
      description: 'Design, fabricate, and compete with a Formula E race car at Formula Bharat 2026 by Raptor Racing team.',
      fullDescription: 'Raptor Racing represents IIT Mandi\'s elite motorsport team, comprising 27 dedicated engineering students working on a Formula E race car for Formula Bharat 2026. This project involves cutting-edge automotive engineering, including advanced battery management systems, regenerative braking, and thermal management. The team focuses on innovative design, hands-on learning, and interdisciplinary collaboration across mechanical, electrical, and documentation tasks.',
      budget: '₹7,97,990',
      teamLead: 'Vaibhav Jain',
      category: 'Automotive',
      icon: 'fas fa-car',
      status: 'Active',
      timeline: '18 months',
      technologies: ['Electric Powertrain', 'Battery Management', 'Aerodynamics', 'Carbon Fiber'],
      achievements: ['Design Validation', 'Sponsor Partnerships', 'Team Formation'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'cansat',
      title: 'CANSAT Project',
      description: 'Design, develop, and launch a CAN-sized satellite weighing 1 kg to an altitude of 1000 meters for IN-SPACe competition.',
      fullDescription: 'The CANSAT project involves designing, developing, and launching a CAN-sized satellite for the prestigious IN-SPACe CANSAT India Student Competition organized by the Astronautical Society of India and ISRO. This miniature satellite, weighing just 1 kg, will be launched to an altitude of 1000 meters and must perform various scientific missions including data collection, transmission, and autonomous operations.',
      budget: '₹70,000',
      teamLead: 'Saransh Duharia',
      category: 'Space Technology',
      icon: 'fas fa-satellite',
      status: 'Active',
      timeline: '8 months',
      technologies: ['Satellite Systems', 'Data Transmission', 'Sensors', 'Microcontrollers'],
      achievements: ['ISRO Selection', 'Design Approval', 'Component Testing'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'drone-swarm',
      title: 'Autonomous Drone Swarm',
      description: 'Development of coordinated drone swarm technology for surveillance and mapping applications.',
      fullDescription: 'The Autonomous Drone Swarm project focuses on developing intelligent multi-drone systems capable of coordinated flight, mapping, and surveillance operations. This cutting-edge project explores swarm intelligence, distributed computing, and autonomous decision-making in unmanned aerial vehicles.',
      budget: '₹1,50,000',
      teamLead: 'Arjun Sharma',
      category: 'Robotics',
      icon: 'fas fa-drones',
      status: 'Planning',
      timeline: '14 months',
      technologies: ['Swarm Intelligence', 'Computer Vision', 'Autonomous Flight', 'Communication Protocols'],
      achievements: ['Concept Approval', 'Funding Secured'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'smart-city',
      title: 'Smart City IoT Platform',
      description: 'Comprehensive IoT platform for smart city applications including traffic management and environmental monitoring.',
      fullDescription: 'The Smart City IoT Platform is an ambitious project to create a comprehensive Internet of Things solution for modern urban challenges. The platform integrates sensors, data analytics, and machine learning to provide real-time insights for traffic management, environmental monitoring, and resource optimization.',
      budget: '₹85,000',
      teamLead: 'Priya Patel',
      category: 'IoT',
      icon: 'fas fa-city',
      status: 'Active',
      timeline: '12 months',
      technologies: ['IoT Sensors', 'Machine Learning', 'Cloud Computing', 'Data Analytics'],
      achievements: ['Pilot Deployment', 'Municipal Partnership'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'neural-prosthetics',
      title: 'Neural Prosthetics Interface',
      description: 'Brain-computer interface for controlling prosthetic limbs using neural signals.',
      fullDescription: 'The Neural Prosthetics Interface project aims to develop advanced brain-computer interfaces that can interpret neural signals to control prosthetic limbs. This interdisciplinary project combines neuroscience, bioengineering, and machine learning to create life-changing technology for amputees.',
      budget: '₹3,20,000',
      teamLead: 'Dr. Raghav Kumar',
      category: 'Bioengineering',
      icon: 'fas fa-brain',
      status: 'Research',
      timeline: '24 months',
      technologies: ['EEG Processing', 'Machine Learning', 'Signal Processing', 'Robotics'],
      achievements: ['Research Grants', 'Ethical Approval'],
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Robotics', 'Automotive', 'Space Technology', 'IoT', 'Bioengineering'];

  const filteredOfferings = offerings.filter(offering => {
    const matchesCategory = selectedCategory === 'All' || offering.category === selectedCategory;
    const matchesSearch = offering.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offering.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10B981';
      case 'Completed': return '#3B82F6';
      case 'Planning': return '#F59E0B';
      case 'Research': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  return (
    <div className={`offerings-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="offerings-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Offerings by SnTC</h1>
            <p>
              Discover groundbreaking projects and innovations that showcase the technical excellence
              and creative spirit of our students and researchers.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">15+</span>
                <span className="label">Active Projects</span>
              </div>
              <div className="stat">
                <span className="number">₹25L+</span>
                <span className="label">Total Investment</span>
              </div>
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredOfferings.map((offering, index) => (
              <Link key={offering.id} to={`/offerings/${offering.id}`} className="project-card-link">
                <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-image">
                    <img src={offering.image} alt={offering.title} />
                    <div className="project-overlay">
                      <div className="project-icon">
                        <i className={offering.icon}></i>
                      </div>
                    </div>
                    <div className="project-status" style={{ backgroundColor: getStatusColor(offering.status) }}>
                      {offering.status}
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{offering.title}</h3>
                      <span className="project-category">{offering.category}</span>
                    </div>
                    
                    <p className="project-description">{offering.description}</p>
                    
                    <div className="project-meta">
                      <div className="meta-item">
                        <i className="fas fa-money-bill-wave"></i>
                        <span>{offering.budget}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-user"></i>
                        <span>{offering.teamLead}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{offering.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="project-technologies">
                      {offering.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                      {offering.technologies.length > 3 && (
                        <span className="tech-tag more">+{offering.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-footer">
                    <div className="achievements-count">
                      <i className="fas fa-trophy"></i>
                      <span>{offering.achievements.length} achievements</span>
                    </div>
                    <div className="view-more">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredOfferings.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No projects found</h3>
              <p>Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="offerings-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project Idea?</h2>
            <p>Join our community of innovators and bring your ideas to life</p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <span>Submit Proposal</span>
                <i className="fas fa-paper-plane"></i>
              </button>
              <button className="cta-button secondary">
                <span>Join a Team</span>
                <i className="fas fa-users"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;