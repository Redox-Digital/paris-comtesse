import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainMenu from './elements/MainMenu';
import Footer from './elements/Footer';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' ? '' : <MainMenu />}

      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      {location.pathname === '/' ? '' : <Footer />}
    </div>
  );
}
