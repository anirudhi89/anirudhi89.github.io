import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <Link to="/">
            <h3>Anirudh Iyer</h3>
          </Link>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Anirudh Iyer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
