import React, {useState} from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [msg, setMsg] = useState('');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxbdjSwQmeu8LLWuTg8PVD5PZB0sAvKsCTu5NgxNTJPvhe_o1_I0K0uZ2kifT_xW4kO/exec';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.result === 'success') {
        setMsg("Message sent successfully!")
        setTimeout(()=> setMsg(""), 5000)
        form.reset();
      } else {
        setMsg("Failed to send message.");
      }
    })
    .catch((error) => {
      console.log('Error!', error.message).
      setMsg("Failed to send message.");
    }); 
  }
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl">
        Contact me for collaboration
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='text-medium my-4 max-w-[50ch] lg:max-w-[30ch]'>
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </motion.p>
          <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='my-4'>{CONTACT.phoneNo}</motion.p>
            <motion.a 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              href="mailto:ziweih1993@gmail.com" className='border-b'>{CONTACT.email}</motion.a>
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className=''>
            <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
              <div className='mb-4'>
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" name='Name' id='name' autoComplete='name' required placeholder='your name' className='text-field'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" name='Email' id='email' autoComplete='email' required placeholder='your email' className='text-field'/>
              </div>
              <div className='mb-4 col-span-2'>
                <label htmlFor="message" className='label'>Message</label>
                <textarea name='Message' 
                  id='message' 
                  required placeholder='Hi!' 
                  className='text-field resize-y min-h-32 max-h-80'/>
              </div >
              <button type='submit' 
                className='rounded-full font-semibold mb-4 bg-violet-800/30 hover:bg-violet-500/70'>
                Submit
              </button>
              {msg && <p className="text-center mt-4">{msg}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
