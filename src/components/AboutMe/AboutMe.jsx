import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';

const AboutMe = () => {
  return (
    <>
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
            <h3 className='text-4xl w-96'>I am Junior Full Stack Developer</h3>
            <div
              className='flex flex-col justify-center
              items-center mt-5'
            >
              <Button variant='text' className=' flex items-center mb-5 '>
                <a href='../AboutMeDetails/AboutMeDetails.jsx'>
                  See More About Me
                </a>
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
    </>
  );
};
export default AboutMe;
