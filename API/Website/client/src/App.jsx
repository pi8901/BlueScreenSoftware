import './App.css';
import Startseite from './Components/Startseite/Startseite';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Analyse from './Components/Analyse/Analyse';
import Strategien from './Components/Strategien/Strategien';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { DataProvider } from './Components/DataContext/DataContext';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/startseite" element={isLoggedIn ? <Startseite /> : <Navigate to="/" />} />
          <Route path="/analyse" element={isLoggedIn ? <Analyse /> : <Navigate to="/" />} />
          <Route path="/strategien" element={isLoggedIn ? <Strategien /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
