import { useState } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='relative'>
        <img
          src='../src/assets/small-design-up.png'
          alt=''
          className='absolute w-28
          '
        />
      </div>
      <nav className='nav-bar  '>
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

      <header className=' mt-20 pt-10 '>
        <div className='flex flex-col items-center justify-center w-full max-m-1'>
          <h1 className='text-3xl'>
            Hello, my name is{' '}
            <strong className='text-[#FE6A00]'>Yui Jensen</strong>
          </h1>
          <div className='flex flex-col mt-20 mb-20'>
            <a href='' className='mb-10'>
              Scroll Down
            </a>
            <FontAwesomeIcon icon={faArrowDown} style={{ color: '#4D4415' }} />
          </div>
        </div>
        <div className=' relative flex flex-start-end'>
          <img
            className=' absolute w-28'
            src='../src/assets/small-design-down.png'
            alt=''
          />
        </div>
      </header>
    </div>
  );
};
export default Dashboard;
