import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './DefaultLayout.css';

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;