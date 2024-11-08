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
      <div className='relative right-0 '>
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

      <header className=' mt-20 pt-20 '>
        <div className='flex flex-col items-center justify-center w-full max-m-1'>
          <h1 className='text-3xl pr-10 pl-10 z-10'>
            Hello, my name is{' '}
            <strong className='text-[#FE6A00]'>Yui Jensen</strong>
          </h1>

          <div className='flex flex-col mt-20 mb-20'>
            <a href='' className='mb-5 z-10'>
              Scroll Down
            </a>
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ color: '#4D4415' }}
              className='z-10'
            />
          </div>
        </div>
        <img
          src='../src/assets/small-design-background1.png'
          alt='yellow-circle background 1'
          className='w-30 absolute animate-float1 '
          style={{ top: '20%', left: '-10%' }}
        />
        <img
          src='../src/assets/small-design-background2.png'
          alt='yellow-circle background 2'
          className='w-28 absolute animate-float2'
          style={{ top: '60%', right: '0%' }}
        />
        <div className=' absolute right-0 bottom-0 '>
          <img
            className=' w-28 '
            src='../src/assets/small-design-down.png'
            alt=''
          />
        </div>
      </header>

      <section className='flex'>
        <div>
          <img src='../src/assets/image2.png' alt='' className='pt-20' />
          <div>
            <h5 className=''>
              I am Junior UX designer & Front End Developer with Back End
              Development knowledge
            </h5>
            <a href='' className='underline decoration-1 tracking-tight'>
              See More About Me
            </a>
            <div>
              <button>
                <a href=''>Resume</a>
              </button>
              <button>
                <a href=''>Linkedin</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
