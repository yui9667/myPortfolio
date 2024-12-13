import { useState, useEffect } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import AboutMe from '../AboutMe/AboutMe';
import Task from '../Task/Task';
import Contact from '../Contact/contact';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <img
          src='../src/assets/logo-yui.png'
          alt='logo'
          className='pl-10 z-10 w-28'
        />
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
          <div className='pr-10'>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: '#e6620a', margin: '10px', fontSize: '20px' }}
            />
            <FontAwesomeIcon
              icon={faMoon}
              style={{ color: '#FFD43B', fontSize: '20px' }}
            />
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

      <AboutMe />
      <Task />
      <Contact />

      <footer className='h-20 bg-white mt-20'>
        <p>@2024 All rights reserved. </p>
      </footer>
    </div>
  );
};
export default Dashboard;
