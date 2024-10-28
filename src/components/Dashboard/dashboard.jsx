//import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className='container-nav'>
        <h5>Yui Jensen</h5>
        <ul>
          <li>About Me</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
      <header>
        <div className='header-container'>
          <h5>Front End Developer</h5>
          <h1>Hello, my name is Yui Jensen</h1>
          <p>
            I am a junior Front End developer with studying experience UX Design
            and Back End Development. I am keen to learn new things
          </p>

          <div className='btn-container'>
            <button className='cv-btn'>CV</button>
            <button className='linedIn-btn'>LinkedIn</button>
          </div>
        </div>
        <img
          className='profile'
          src='/portfolio/src/assets/image1.png'
          alt=''
        />
      </header>
    </div>
  );
};
export default Dashboard;
