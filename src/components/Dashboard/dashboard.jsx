import { useState } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';

const Dashboard = () => {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [isOpen, setIsOpen] = useState(false);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
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

      <header>
        <ScrollContainer className='flex flex-col items-center justify-center sticky'>
          <ScrollPage page={1}>
            <Animator>
              <span className='text-5xl '>
                Hello, My name is{' '}
                <strong className='text-[#FE6A00]'>Yui Jensen</strong>
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={batch(Fade(), Move(), Sticky())}>
              <div className='flex flex-row items-center justify-center w-full '>
                <img
                  className='w-96'
                  src='../src/assets/image2.png'
                  alt='my proflie'
                />
                <div>
                  <h3 className='text-4xl w-96'>
                    I am Junior UX designer & Front End Developer with Back End
                    Development knowledge
                  </h3>
                  <div
                    className='flex flex-col justify-center
                items-center mt-5'
                  >
                    <Button variant='text' className=' flex items-center mb-5 '>
                      <a href=''>See More About Me</a>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='h-5 w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                    </Button>
                    <div>
                      <Button className='mr-10 bg-amber-800'>
                        <a href=''>Resume</a>
                      </Button>
                      <Button className='bg-amber-800'>
                        <a href=''>Linkedin</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </header>
    </div>
  );
};
export default Dashboard;
