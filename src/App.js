import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import News from './News';
import Contact from './Contact';
import Home from './Home'; // Assume you've created a Home component
import CarProducts from './carproducts';

function App() {
  return (

    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/products-services" element={<CarProducts />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
