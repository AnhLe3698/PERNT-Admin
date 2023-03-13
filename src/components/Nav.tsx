import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "./Nav.css";

function Nav() {
  
  return (
    <div className="nav">
       <nav>
        <ul className='nav-list'>
          <li>
            <Link className='link' to="/" >Home</Link>
          </li>
          <li>
            <Link className='link' to="/about">About</Link>
          </li>
          <li>
            <Link className='link' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    
    </div>
  );
}

export default Nav;