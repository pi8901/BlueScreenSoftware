import './App.css';
import Startseite from './Components/Startseite/Startseite';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Analyse from './Components/Analyse/Analyse';
import Strategien from './Components/Strategien/Strategien';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/startseite" element={isLoggedIn ? <Startseite /> : <Navigate to="/" />} />
        <Route path="/analyse" element={isLoggedIn ? <Analyse /> : <Navigate to="/" />} />
        <Route path="/strategien" element={isLoggedIn ? <Strategien /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

/* 
=== Befehle für Hosten, stoppen, dev starten === 
1. firebase deploy --only hosting
2. npm run dev  
3. Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (für windows)
4. firebase hosting:disable
=== Github ===
git add .
git commit -m "was ist neu?"
git push
---------
git pull 
*/