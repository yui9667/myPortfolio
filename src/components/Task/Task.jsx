import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import Letter from '../Letter/Letter';
import { ScrollContainer } from 'react-scroll-motion';
const Task = () => {
  return (
    <>
      {' '}
      <ScrollContainer>
        <Letter />

        <Letter />
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
              voluptatibus officia vitae libero dolore expedita esse fuga quas
              sit.
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
              voluptatibus officia vitae libero dolore expedita esse fuga quas
              sit.
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
              voluptatibus officia vitae libero dolore expedita esse fuga quas
              sit.
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
      </ScrollContainer>
    </>
  );
};

export default Task;
