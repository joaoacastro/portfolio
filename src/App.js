import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './pages/Navbar';
import './App.css'

import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
