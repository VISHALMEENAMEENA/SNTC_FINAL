import React from 'react';
import './SysAdmins.css';

const SysAdmins = () => {
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
      image: "src/assets/images/vaibhav.jpeg"
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
      image: "src/assets/images/aditya.jpeg"
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
      image: "src/assets/images/aritra.jpeg"
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
      image: "src/assets/images/himadri.jpeg"
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
      image: "src/assets/images/vinamra.jpeg"
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
      image: "src/assets/images/anhad.jpeg"
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
      image: "src/assets/images/shubhum.png"
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
      image: "src/assets/images/diksha.jpeg"
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
      image: "src/assets/images/dhruv.jpeg"
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
      image: "src/assets/images/rohith.jpeg"
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
      image: "src/assets/images/tharun.jpeg"
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
      image: "src/assets/images/kusum.jpeg"
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
      image: "src/assets/images/manan.jpeg"
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
      image: "src/assets/images/yogesh.jpeg"
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
      image: "src/assets/images/ayush.jpeg"
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
      image: "src/assets/images/RCmanish.jpeg"
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
      image: "src/assets/images/mayank.jpeg"
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
      image: "src/assets/images/piyush.jpeg"
    }
  ];

  const stats = [
    {
      number: "8+",
      label: "Technical Clubs"
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

  return (
    <div className="sysadmins-container">
      {/* Hero Section */}
      <section className="sysadmins-hero">
        <div className="hero-content">
          <h1 className="hero-title">Science & Technology Council</h1>
          <p className="hero-subtitle">
            Meet the dedicated team behind SNTC IIT Mandi's technical excellence
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
                <span className="command">systemctl status sntc-team</span>
              </div>
              <div className="terminal-output">
                <span className="status-active">● SNTC Core Team: Active (running)</span>
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command typing">ls -la /var/sntc/team</span>
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
                  
                  {(member.linkedin || member.instagram) && (
                  <div className="contact-links">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                      >
                        <svg
                          className="contact-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}

                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                      >
                        <svg
                          className="contact-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
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
            <h2>Contact SNTC Core Team</h2>
            <p>
              Get in touch with the SNTC core team members for technical support, 
              event coordination, or general inquiries about our activities and clubs.
            </p>
            
            <div className="contact-actions">
              <button className="primary-btn">Contact SNTC</button>
              <button className="secondary-btn">Join a Club</button>
              <button className="secondary-btn">Participate in Events</button>
            </div>

            <div className="additional-links">
              <h3>Official Links</h3>
              <div className="links-grid">
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
