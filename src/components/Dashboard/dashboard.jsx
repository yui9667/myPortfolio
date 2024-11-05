import { useState } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className='nav-bar'>
        <a href='#body'>Yui Jensen</a>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              About Me
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Skills
            </a>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              Contact
            </a>
          </li>
          <div className=''>
            <FontAwesomeIcon icon={faSun} style={{ color: '#e6620a' }} />
            <FontAwesomeIcon icon={faMoon} style={{ color: '#FFD43B' }} />
          </div>
        </ul>
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleHamburger}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>

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
