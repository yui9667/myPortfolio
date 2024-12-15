// import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Task.css';
const Task = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' };
  return (
    <>
      <div className=' w-screen, h-dvh flex mt-20 overflow-hidden'>
        <Parallax pages={7} config={{ tension: 170, friction: 26 }}>
          <ParallaxLayer
            sticky={{ start: 0, end: 1 }}
            speed={0.3}
            style={{ ...alignCenter, justifyContent: 'center' }}
          >
            <p className='text-xl'>Scroll Down</p>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.3}
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'flex-start' }}
          >
            <div id='project1'></div>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.3}
            sticky={{ start: 1.5, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
            className='flex flex-row justify-center items-center ml-40 '
          >
            <div className='flex flex-col justify-center items-center '>
              <p className='text-2xl font-bold'> QUIZ TIME</p>
              <p className='w-8/12  text-2xl font-bold'>
                This is a Group project from Sundsgårdens Folkhögskola. Using
                Trivia API about knowledge questions.
              </p>
              <p className='font-bold'>Language: React</p>
              <div className='mt-5'>
                <Button className='pr-8 pl-8 mr-10'>Live</Button>
                <Button>Github</Button>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.3}
            sticky={{ start: 3, end: 5 }}
            style={{ ...alignCenter, justifyContent: 'flex-start' }}
          >
            <div id='project2'></div>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.3}
            sticky={{ start: 3.8, end: 5 }}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
            className='flex flex-row justify-center items-center ml-40 '
          >
            <div className='flex flex-col justify-center items-center '>
              <p className='text-2xl font-bold'> Weather Forecasts</p>
              <p className='w-8/12  text-2xl font-bold'>
                Using the OpenWeatherMap API, users can enter a location and see
                the weather for today and the next 7 days.
              </p>
              <p className='font-bold'>Language: React</p>
              <div className='mt-5'>
                <Button className='pr-8 pl-8 mr-10'>Live</Button>
                <Button>Github</Button>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.5}
            speed={0.3}
            className='flex flex-col justify-center items-center '
          >
            <Button variant='text' className=' text-xl px-5 flex'>
              <a href=''>See More Project</a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='h-7 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </ParallaxLayer>
        </Parallax>
        <h1>hello</h1>
      </div>
    </>
  );
};

export default Task;
