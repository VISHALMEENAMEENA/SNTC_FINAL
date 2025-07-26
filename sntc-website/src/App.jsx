import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout.jsx';

import Home from './pages/Home.jsx';
import Clubs from './pages/Clubs.jsx';
import InterIIT from './pages/InterIIT.jsx';
import SysAdmins from './pages/SysAdmins.jsx';
import Offerings from './pages/Offerings.jsx';           // Added Offerings page
import OfferingDetail from './pages/OfferingDetail.jsx'; // Added Offering details page
import Cell from './pages/Cell.jsx';                     // Added Cell details page
import NotFound from './pages/NotFound.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/inter-iit" element={<InterIIT />} />
          <Route path="/sysadmins" element={<SysAdmins />} />

          {/* Offerings routes */}
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/offerings/:id" element={<OfferingDetail />} />

          {/* Cell route */}
          <Route path="/cell/:id" element={<Cell />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
