import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
} from 'react-scroll-motion';

const Contact = () => {
  const form = useRef();
  const fadeInAndUp = Move(1000, 0, 0, 0);
  const fadeInAndDown = Move(-1000, 0, 0, 0);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qm942d9', 'template_ncwn83a', form.current, {
        publicKey: 'p4mQfOb8Qqou5Q80d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Successfully send!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('It failed to sent it. Please try again!');
        }
      );
  };
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <section className='flex flex-col items-center justify-center mt-20'>
            <div
              style={{
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
              }}
            >
              <Animator animation={fadeInAndUp}>
                <span className='text-5xl brown-color'>12</span>
                <span className='text-5xl brown-color'>12</span>
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
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className='flex flex-col bg-amber-100 p-20 mt-20'
            >
              <label>Name</label>
              <input
                className='px-20 py-1 rounded-sm mb-3'
                type='text'
                name='user_name'
              />
              <label>Email</label>
              <input
                className='py-1 rounded-sm mb-3'
                type='email'
                name='user_email'
              />
              <label>Message</label>
              <textarea name='message ' className='py-20 rounded-sm mb-3' />
              <input
                type='submit'
                value='Send'
                className=' py-1 rounded-sm transition ease-in-out delay-100 bg-amber-800 hover:-translate-y-1 hover:scale-110  hover:bg-amber-700 duration-300 ...'
              />
            </motion.form>
          </section>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default Contact;
