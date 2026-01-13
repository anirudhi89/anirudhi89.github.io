import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Hi, I'm Anirudh.</h1>
        <p className="intro">
          I'm a developer passionate about building minimal and functional web experiences.
        </p>
        <div className="cta">
          <Link to="/projects" className="btn">View My Work</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
