import React, { useState, useEffect } from 'react';
import ClubCard from '../components/ClubCard';
import './Clubs.css';

const Clubs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Clubs with updated categories merging for meaningful grouping
  const allClubs = [
    {
      name: 'Programming Club',
      description: 'An enthusiastic coder? Here is the club for you. It is a club dedicated to programming related activities. It keeps you updated with all the programming related activities and competitions. It also organizes several competitions and workshops to increase coding skills. The Association for Computing and Machinery(ACM) Chapter at IIT Mandi organizes various guest lectures and tutorials from time to time.',
      website: 'http://pc.iitmandi.co.in/',
      category: 'software',
      tags: ['Programming', 'Competitive Coding', 'Web Development', 'ACM'],
      stats: { members: '150+', projects: '25+', events: '30+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/kamandprompt/',
        github: 'https://github.com/pc-iitmandi'
      }
    },
    {
      name: 'Robotronics Club',
      description: 'Robotics + Electronics = Robotronics. This club works in the field of both robotics and electronics. In electronics domain, it works on analog and digital electronics helping in developing practical skills in building and designing circuits. On the other hand in robotics it provides everything that students need to build robots: workspace, tools, supplies, money and experienced people to answer questions and help with projects.',
      website: 'http://robotronics.iitmandi.co.in/',
      category: 'hardware-mechanical',
      tags: ['Robotics', 'Electronics', 'Hardware', 'Circuits'],
      stats: { members: '120+', projects: '20+', events: '25+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/robotronics_iitmandi/'
      }
    },
    {
      name: 'Entrepreneurship Cell',
      description: 'E-Cell is a holographic abbreviation adopted by the entrepreneurship club of IIT Mandi. It\'s an alumnus initiation and currently is the stewardship of a team of five inter-disciplinary students with the mentorship of Dr. Satvasheel Powar, churning their ideas to reach the various aspects of what lies in this "business" of reaching the society. And as the name celebrates our crazy love for subjects related to business and its disciplinaries we always strive to give a glimpse of the potions of business by conducting multifarious of events.',
      website: 'https://ecell.iitmandi.co.in/',
      category: 'business',
      tags: ['Business', 'Startups', 'Innovation', 'Entrepreneurship'],
      stats: { members: '100+', projects: '15+', events: '20+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/ecell_iitmandi/',
        linkedin: 'https://www.linkedin.com/company/e-cell-iit-mandi'
      }
    },
    {
      name: 'Yantrik Club',
      description: 'As a part of the technical council of IIT Mandi, this club plays a crucial role in the field of mechanical engineering. It focuses on developing green and effective energy methods. It organizes activities like arCAD, MechFest.',
      website: 'https://yantrik.iitmandi.co.in',
      category: 'hardware-mechanical',
      tags: ['Mechanical', 'Energy', 'CAD', 'Green Technology'],
      stats: { members: '90+', projects: '18+', events: '22+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/yantrik_iitmandi/'
      }
    },
    {
      name: 'Nirmaan Club',
      description: 'Nirmaan Club aims at creating a realization among students of the importance of Civil Engineering aspects in day to day which are often ignored by organizing events, workshops, quizzes, projects etc.',
      website: 'https://www.facebook.com/groups/802179339895110/',
      category: 'civil-infrastructure',
      tags: ['Civil Engineering', 'Construction', 'Infrastructure', 'Design'],
      stats: { members: '75+', projects: '12+', events: '18+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/nirmaan_iitmandi/'
      }
    },
    {
      name: 'STAC',
      description: 'STAC aims at making students familiar with everything related to Astronomy, Space and Open Source development in the field of Space Technology. The club has 2 telescopes, a 12" telescope under construction, a pair of binoculars and organizes frequent star-gazing sessions and undertakes several interesting technical projects.',
      website: 'http://stac.iitmandi.co.in/',
      category: 'space-science',
      tags: ['Astronomy', 'Space Technology', 'Telescopes', 'Open Source'],
      stats: { members: '80+', projects: '15+', events: '25+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/stac_iitmandi/'
      }
    },
    {
      name: 'KBG',
      description: 'At the juncture of biology and engineering, KBG offers exposure to a multitude of outlooks and a broad variety of topics including computational biology, genetics, neuroscience, biomechanics, biotechnology, nanotechnology, biomimetics and other associated forks diverging from the interplay of nature\'s craft and the intellectual desire to grasp it.',
      website: 'https://www.instagram.com/kbg_iitmandi/',
      category: 'biotech',
      tags: ['Bioengineering', 'Genetics', 'Neuroscience', 'Nanotechnology'],
      stats: { members: '65+', projects: '10+', events: '15+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/kbg_iitmandi/'
      }
    },
    {
      name: 'SAE',
      description: 'SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile.',
      website: 'https://clubsae.iitmandi.co.in/',
      category: 'hardware-mechanical',
      tags: ['Automotive', 'Engines', 'Mechanical', 'Vehicles'],
      stats: { members: '85+', projects: '12+', events: '20+' },
      socialMedia: {
        instagram: 'https://www.instagram.com/sae_iitmandi/'
      }
    }
  ];

  // Updated filters with merged categories
  const filters = [
    { key: 'all', label: 'All Clubs', icon: 'fas fa-th-large' },
    { key: 'software', label: 'Software', icon: 'fas fa-code' },
    { key: 'hardware-mechanical', label: 'Hardware & Mechanical', icon: 'fas fa-microchip' },
    { key: 'business', label: 'Business', icon: 'fas fa-lightbulb' },
    { key: 'civil-infrastructure', label: 'Civil & Infrastructure', icon: 'fas fa-building' },
    { key: 'space-science', label: 'Space & Science', icon: 'fas fa-rocket' },
    { key: 'biotech', label: 'Biotech', icon: 'fas fa-dna' }
  ];

  const filteredClubs = allClubs.filter(club => {
    const matchesFilter = activeFilter === 'all' || club.category === activeFilter;
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      club.name.toLowerCase().includes(lowerQuery) ||
      club.description.toLowerCase().includes(lowerQuery) ||
      club.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`clubs-page ${isVisible ? 'visible' : ''}`}>
      {/* Header Section */}
      <section className="clubs-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Our Technical Clubs</h1>
            <p className="page-subtitle">
              Explore our diverse range of technical clubs and find your passion. 
              Each club offers unique opportunities for learning, innovation, and growth.
            </p>
            
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-box">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Search clubs, technologies, or interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchQuery('')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="header-bg-elements">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <h3 className="filter-title">Filter by Category</h3>
            <div className="filter-pills">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`filter-pill ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <i className={filter.icon}></i>
                  <span>{filter.label}</span>
                  <span className="club-count">
                    {filter.key === 'all' 
                      ? allClubs.length 
                      : allClubs.filter(club => club.category === filter.key).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="clubs-grid-section">
        <div className="container">
          {/* Results Info */}
          <div className="results-info">
            <h3>
              {searchQuery ? (
                <>Showing {filteredClubs.length} results for "{searchQuery}"</>
              ) : (
                <>
                  {activeFilter === 'all' ? 'All Clubs' : filters.find(f => f.key === activeFilter)?.label} 
                  <span className="count">({filteredClubs.length} clubs)</span>
                </>
              )}
            </h3>
            
            {filteredClubs.length === 0 && (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No clubs found matching your criteria.</p>
                <button 
                  className="reset-filters"
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Clubs Grid */}
          {filteredClubs.length > 0 && (
            <div className="clubs-grid">
              {filteredClubs.map((club, index) => (
                <div 
                  key={index} 
                  className="club-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ClubCard club={club} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="clubs-stats-section">
        <div className="container">
          <div className="stats-header">
            <h2>Our Impact</h2>
            <p>Numbers that showcase our vibrant technical community</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Active Clubs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Events Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="join-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join a Club?</h2>
            <p>
              Take the first step towards your technical journey. Our clubs welcome 
              enthusiastic students at any time during the academic year.
            </p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary"
                onClick={() => window.location.href = 'mailto:contact@sntc.iitmandi.co.in'}
              >
                <span>Contact Clubs</span>
                <i className="fas fa-envelope"></i>
              </button>
              <button 
                className="cta-button secondary"
                onClick={() => window.open('https://sntc.iitmandi.co.in/clubs', '_blank', 'noopener noreferrer')}
              >
                <span>Learn More</span>
                <i className="fas fa-info-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clubs;
