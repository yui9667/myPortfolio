import { Animator, Move } from 'react-scroll-motion';

const Letter = () => {
  const fadeInAndUp = Move(1000, 0, 0, 0);
  const fadeInAndDown = Move(-1000, 0, 0, 0);
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-20'>
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            position: 'relative',
          }}
        >
          <Animator animation={fadeInAndUp}>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
          </Animator>
          <Animator animation={fadeInAndDown}>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
            <span className='text-5xl brown-color'>CONTACT</span>
          </Animator>
        </div>
      </div>
    </>
  );
};

export default Letter;
