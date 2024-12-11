import { useState, useEffect } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Move,
  Fade,
} from 'react-scroll-motion';

const Dashboard = () => {
  const fadeInAndUp = batch(Move(1000, 0, 0, 0));
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
      <ScrollContainer>
        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-col items-center justify-center'
        >
          <span className='text-5xl '>
            Hello, My name is{' '}
            <strong className='text-[#FE6A00]'>Yui Jensen</strong>
          </span>

          <div className='flex flex-row items-center justify-center w-full '>
            <img
              className='w-96'
              src='../src/assets/image2.png'
              alt='my proflie'
            />
            <div>
              <h3 className='text-4xl w-96'>
                I am Junior Full Stack Developer
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
                    <a href='https://www.linkedin.com/in/yui-jensen67/'>
                      Linkedin
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
        <ScrollPage>
          <section className='flex flex-col items-center justify-center mt-20'>
            <Animator animation={fadeInAndUp}>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
            </Animator>
            <Animator animation={Move(-1000, 0, 0, 0)}>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
              <span className='text-5xl text-yellow-300'>PROJECT</span>
            </Animator>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className='flex flex-row mt-20 justify-center'
            >
              <div className='flex flex-col mr-10 ml-10 '>
                <img className='w-20' src='/src/assets/github.png' alt='' />
                <p className='w-60'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  voluptatibus officia vitae libero dolore expedita esse fuga
                  quas sit.
                </p>
                <div className='mt-5'>
                  <Button className='pr-8 pl-8 mr-10 '>Live</Button>
                  <Button>Github</Button>
                </div>
              </div>
              <div className='flex flex-col mr-10 ml-10 '>
                <img className='w-20' src='/src/assets/github.png' alt='' />
                <p className='w-60'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  voluptatibus officia vitae libero dolore expedita esse fuga
                  quas sit.
                </p>
                <div className='mt-5'>
                  <Button className='pr-8 pl-8 mr-10'>Live</Button>
                  <Button>Github</Button>
                </div>
              </div>
              <div className='flex flex-col mr-10 ml-10'>
                <img className='w-20' src='/src/assets/github.png' alt='' />
                <p className='w-60'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  voluptatibus officia vitae libero dolore expedita esse fuga
                  quas sit.
                </p>
                <div className='mt-5'>
                  <Button className='pr-8 pl-8 mr-10'>Live</Button>
                  <Button>Github</Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Button variant='text' className=' flex items-center mt-20 '>
                <a href=''>See More Project</a>
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
            </motion.div>
          </section>
        </ScrollPage>

        <section className='flex flex-col items-center justify-center'>
          <Animator animation={fadeInAndUp}>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
          </Animator>
          <Animator animation={Move(-1000, 0, 0, 0)}>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
          </Animator>
          <form action='' className='mt-20 flex flex-col'>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </form>
        </section>
      </ScrollContainer>
      <footer className='h-40'>
        <p>@2024 all revered </p>
      </footer>
    </div>
  );
};
export default Dashboard;
