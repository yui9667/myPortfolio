import { useState } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <div className='relative right-0 '>
        <img
          src='../src/assets/small-design-up.png'
          alt=''
          className='absolute w-28
          '
        />
      </div> */}
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
        <div className='w-full max-w-screen-sm bg-yellow-100 '>
          <header className=''>
            <div className='flex flex-col items-center justify-center w-full max-m-1'>
              <motion.h1
                className='text-4xl  pr-5 pl-5 pt-20'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  duration: 1,
                  delay: '0.8',
                  stiffness: 130,
                  ease: 'easeIn',
                }}
              >
                Hello, my name is{' '}
                <strong className='text-[#FE6A00]'>Yui Jensen</strong>
              </motion.h1>

              <motion.div
                className='flex flex-col mt-20 mb-20'
                style={{ scale }}
              >
                <motion.a
                  href=''
                  className='mb-5 z-10'
                  style={{ scaleY: scrollYProgress }}
                >
                  Scroll Down
                </motion.a>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ color: '#4D4415' }}
                  className='z-10'
                />
              </motion.div>
            </div>
            {/* <img
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
        /> */}
            {/* <div className=' absolute right-0 bottom-0 '>
          <img
            className=' w-28 '
            src='../src/assets/small-design-down.png'
            alt=''
          />
        </div> */}
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
      </div>
    </div>
  );
};
export default Dashboard;
