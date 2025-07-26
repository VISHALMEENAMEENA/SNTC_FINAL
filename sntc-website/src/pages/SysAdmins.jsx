import React from 'react';
import './SysAdmins.css';

const SysAdmins = () => {
  // SNTC Faculty Advisor
  const facultyAdvisor = {
    name: "Dr. Narendra Kumar Dhar",
    role: "Society Advisor - SNTC",
    department: "Computer Science & Engineering",
    email: "nkdhar@iitmandi.ac.in",
    phone: "+91-1905-267-XXX",
    office: "A-Block, Room No. XXX",
    image: "/assets/images/faculty/nk_dhar.jpg"
  };

  // SNTC Core Team Members (Based on actual data from SNTC website)
  const sntcCoreTeam = [
    {
      name: "Vaibhav Kesharwani", 
      role: "President",
      year: "4th Year",
      branch: "Computer Science & Engineering",
      email: "president@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://www.linkedin.com/in/born-engineer73/",
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/vaibhav_kesharwani.jpg"
    },
    {
      name: "Aditya Sahu",
      role: "Vice President", 
      year: "3rd Year",
      branch: "Electrical Engineering",
      email: "vicepresident@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/aditya-sahu", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/aditya_sahu.jpg"
    },
    {
      name: "Aritra Boral",
      role: "Technical Secretary",
      year: "3rd Year", 
      branch: "Data Science & Engineering",
      email: "technical_secretary@students.iitmandi.ac.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/aritra-boral", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/aritra_boral.jpg"
    },
    {
      name: "Himadri Singh",
      role: "General Secretary",
      year: "3rd Year",
      branch: "Mechanical Engineering", 
      email: "secretary@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/himadri-singh", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/himadri_singh.jpg"
    },
    {
      name: "Vinamra Garg",
      role: "Treasurer",
      year: "2nd Year",
      branch: "Civil Engineering",
      email: "treasurer@sntc.iitmandi.co.in", 
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/vinamra-garg", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/vinamra_garg.jpg"
    },
    {
      name: "Anhad Thakral",
      role: "Public Relations Head",
      year: "2nd Year",
      branch: "Electrical Engineering",
      email: "pr@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/anhad-thakral", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/anhad_thakral.jpg"
    },
    {
      name: "Shubham Padhi",
      role: "Design Head",
      year: "2nd Year",
      branch: "Computer Science & Engineering",
      email: "design@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/shubham-padhi", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/shubham_padhi.jpg"
    },
    {
      name: "Diksha Sharma", 
      role: "Web Development Head",
      year: "2nd Year",
      branch: "Data Science & Engineering",
      email: "webdev@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/diksha-sharma", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/diksha_sharma.jpg"
    },
    {
      name: "Dhruv Verma",
      role: "Events Coordinator",
      year: "2nd Year",
      branch: "Mechanical Engineering",
      email: "events@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/dhruv-verma", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/dhruv_verma.jpg"
    },
    {
      name: "Rohith Pranav",
      role: "Marketing Head",
      year: "2nd Year",
      branch: "Computer Science & Engineering",
      email: "marketing@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/rohith-pranav", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/rohith_pranav.jpg"
    },
    {
      name: "Tharun Chanda",
      role: "Technical Coordinator",
      year: "2nd Year",
      branch: "Electrical Engineering",
      email: "techcoord@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/tharun-chanda", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/tharun_chanda.jpg"
    },
    {
      name: "Kusum Agrawal",
      role: "Content Head",
      year: "2nd Year",
      branch: "Civil Engineering",
      email: "content@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/kusum-agrawal", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/kusum_agrawal.jpg"
    },
    {
      name: "Manan",
      role: "Operations Head",
      year: "1st Year",
      branch: "Mechanical Engineering",
      email: "operations@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/manan", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/manan.jpg"
    },
    {
      name: "Yogesh",
      role: "Social Media Head",
      year: "1st Year",
      branch: "Data Science & Engineering",
      email: "social@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/yogesh", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/yogesh.jpg"
    },
    {
      name: "Ayush Sawarn",
      role: "Finance Coordinator",
      year: "1st Year",
      branch: "Computer Science & Engineering",
      email: "finance@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/ayush-sawarn", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/ayush_sawarn.jpg"
    },
    {
      name: "R C Manish Reddy",
      role: "Logistics Head",
      year: "1st Year",
      branch: "Electrical Engineering",
      email: "logistics@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/rc-manish-reddy", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/rc_manish_reddy.jpg"
    },
    {
      name: "Mayank Goel",
      role: "Sponsorship Head",
      year: "1st Year",
      branch: "Civil Engineering",
      email: "sponsorship@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/mayank-goel", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/mayank_goel.jpg"
    },
    {
      name: "Piyush Kumar",
      role: "Outreach Coordinator",
      year: "1st Year",
      branch: "Mechanical Engineering",
      email: "outreach@sntc.iitmandi.co.in",
      phone: "+91-XXXX-XXX-XXX",
      linkedin: "https://linkedin.com/in/piyush-kumar", // Add actual LinkedIn
      instagram: "https://instagram.com/username", // Add actual Instagram
      image: "/assets/images/team/piyush_kumar.jpg"
    }
  ];

  // SNTC Technical Clubs
  const sntcClubs = [
    {
      name: "Programming Club (KamandPrompt)",
      description: "Dedicated to programming activities, competitions, and workshops to enhance coding skills",
      website: "http://pc.iitmandi.co.in/",
      icon: "💻"
    },
    {
      name: "Robotronics Club", 
      description: "Works in robotics and electronics, providing workspace, tools, and expertise for building robots",
      website: "http://robotronics.iitmandi.co.in/",
      icon: "🤖"
    },
    {
      name: "Entrepreneurship Cell (E-Cell)",
      description: "Focused on business aspects and entrepreneurship, conducting various business-related events",
      website: "https://ecell.iitmandi.co.in/",
      icon: "💼"
    },
    {
      name: "Yantrik Club",
      description: "Mechanical engineering club focusing on green and effective energy methods",
      website: "https://yantrik.iitmandi.co.in",
      icon: "⚙️"
    },
    {
      name: "Nirmaan Club",
      description: "Civil Engineering club organizing events, workshops, and projects related to construction",
      website: "https://www.facebook.com/groups/802179339895110/",
      icon: "🏗️"
    },
    {
      name: "Space Technology and Astronomy Cell (STAC)",
      description: "Astronomy and space technology club with telescopes and star-gazing sessions",
      website: "http://stac.iitmandi.co.in/",
      icon: "🚀"
    },
    {
      name: "Kamand Bioengineering Group (KBG)",
      description: "Focuses on computational biology, genetics, neuroscience, and biotechnology",
      website: "https://www.instagram.com/kbg_iitmandi/",
      icon: "🧬"
    },
    {
      name: "Society of Automotive Engineers (SAE)",
      description: "Automotive engineering team working on gears, suspensions, engines, and brakes",
      website: "https://clubsae.iitmandi.co.in/",
      icon: "🚗"
    }
  ];

  const stats = [
    {
      number: "8+",
      label: "Technical Clubs"
    },
    {
      number: "18",
      label: "Core Members"
    },
    {
      number: "500+",
      label: "Active Students"
    },
    {
      number: "24/7",
      label: "Innovation"
    }
  ];

  // SNTC Contact Information
  const sntcContacts = [
    {
      title: "SNTC General Queries",
      email: "sntc@iitmandi.ac.in",
      phone: "+91-1905-267-XXX",
      office: "Student Activity Center"
    },
    {
      title: "Technical Secretary",
      email: "technical_secretary@students.iitmandi.ac.in",
      phone: "+91-1905-267-XXX",
      office: "SNTC Office"
    },
    {
      title: "Event Coordination",
      email: "events@sntc.iitmandi.co.in", 
      phone: "+91-1905-267-XXX",
      office: "SNTC Office"
    }
  ];

  return (
    <div className="sysadmins-container">
      {/* Hero Section */}
      <section className="sysadmins-hero">
        <div className="hero-content">
          <h1 className="hero-title">Science & Technology Council</h1>
          <p className="hero-subtitle">
            The technical society of IIT Mandi fostering innovation, learning, and technical excellence
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn red"></span>
                <span className="btn yellow"></span>
                <span className="btn green"></span>
              </div>
              <span className="terminal-title">sntc@iitmandi:~$</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">systemctl status sntc-clubs</span>
              </div>
              <div className="terminal-output">
                <span className="status-active">● 8 Technical Clubs: Active (running)</span>
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command typing">ls -la /var/sntc/innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SNTC */}
      <section className="about-sysadmins">
        <div className="container">
          <h2 className="section-title">About SNTC</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                The Science and Technology Council (SNTC) is the technical society of IIT Mandi, 
                consisting of technical clubs for programming, bioengineering, automotive engineering, 
                robotics, astronomy, mechanics, civil engineering and entrepreneurship.
              </p>
              <p>
                One unique feature of the Institute's Technical Society is that all clubs support 
                open participation - students are free to join any club at any point and dedicated 
                students are rewarded accordingly. Members enthusiastically represent the college 
                in national events and have brought several laurels for the institute.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <span>Inter-IIT Tech Meet</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span>Open Participation</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💡</span>
                  <span>Innovation & Research</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="server-rack">
                <div className="server" style={{animationDelay: '0s'}}></div>
                <div className="server" style={{animationDelay: '0.5s'}}></div>
                <div className="server" style={{animationDelay: '1s'}}></div>
                <div className="server" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="faculty-section">
        <div className="container">
          <h2 className="section-title">Faculty Advisor</h2>
          <div className="faculty-single">
            <div className="faculty-card">
              <div className="faculty-avatar">
                {facultyAdvisor.image ? (
                  <img src={facultyAdvisor.image} alt={facultyAdvisor.name} className="faculty-image" />
                ) : (
                  <div className="avatar-placeholder">
                    {facultyAdvisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <h3 className="faculty-name">{facultyAdvisor.name}</h3>
              <p className="faculty-role">{facultyAdvisor.role}</p>
              <p className="faculty-dept">{facultyAdvisor.department}</p>
              <div className="faculty-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>{facultyAdvisor.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>{facultyAdvisor.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏢</span>
                  <span>{facultyAdvisor.office}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNTC Core Team */}
      <section className="core-team-section">
        <div className="container">
          <h2 className="section-title">SNTC Core Team</h2>
          <div className="team-grid">
            {sntcCoreTeam.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="member-image" />
                  ) : (
                    <div className="avatar-placeholder">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-year">{member.year} - {member.branch}</p>
                <div className="member-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>{member.email}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>{member.phone}</span>
                  </div>
                  {member.linkedin && (
                    <div className="contact-item">
                      <span className="contact-icon">💼</span>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                  )}
                  {member.instagram && (
                    <div className="contact-item">
                      <span className="contact-icon">📸</span>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>Contact SNTC</h2>
            <p>
              Get in touch with the Science and Technology Council for technical support, 
              event coordination, or general inquiries about our activities and clubs.
            </p>
            
            <div className="sntc-contacts">
              <div className="contact-methods">
                {sntcContacts.map((contact, index) => (
                  <div key={index} className="contact-method">
                    <h4>{contact.title}</h4>
                    <div className="contact-details">
                      <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <span>{contact.email}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <span>{contact.phone}</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-icon">🏢</span>
                        <span>{contact.office}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-actions">
              <button className="primary-btn">Contact SNTC</button>
              <button className="secondary-btn">Join a Club</button>
              <button className="secondary-btn">Participate in Events</button>
            </div>

            <div className="additional-links">
              <h3>Official Links</h3>
              <div className="links-grid">
                <a href="https://sntc.iitmandi.co.in" target="_blank" rel="noopener noreferrer">
                  SNTC Official Website
                </a>
                <a href="https://sntc.iitmandi.co.in/SnTC_core.html" target="_blank" rel="noopener noreferrer">
                  SNTC Core Team
                </a>
                <a href="https://sntc.iitmandi.co.in/projects.html" target="_blank" rel="noopener noreferrer">
                  SNTC Projects
                </a>
                <a href="https://iitmandi.ac.in" target="_blank" rel="noopener noreferrer">
                  IIT Mandi Official
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SysAdmins;