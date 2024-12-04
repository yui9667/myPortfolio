import { useState } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Welcome from '../Welcome/Welcome';
const Dashboard = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
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
      <div className=' flex flex-col items-center justify-center'>
        <div className='w-full max-w-screen-sm  '>
          <header className=''>
            <div className='flex flex-col items-center justify-center w-full '>
              <motion.h1
                className='text-7xl mt-20'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: '0.8',
                  stiffness: 130,
                  ease: 'easeIn',
                }}
                style={{ scaleY: scrollYProgress }}
              >
                Hello, my name is{' '}
                <strong className='text-[#FE6A00]'>Yui Jensen</strong>
              </motion.h1>
            </div>
          </header>

          <section className='flex items-center justify-center'>
            <div className='flex flex-row items-center justify-center w-full'>
              <img
                className='gap-50px'
                src='../src/assets/image2.png'
                alt='my proflie'
              />
              <div>
                <h5 className='text-3xl w-full w-2/4'>
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
      </div>
    </div>
  );
};
export default Dashboard;
