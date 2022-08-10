import React, { useState } from 'react';

const ContactSection = () => {
  const inputStyle = `px-4 py-3 w-full mb-5 border outline-black outline-1 rounded border-neutral-400`;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { name, email, subject, message } = contact;

  const inputChangeHandler = ({ target: { name, value } }) =>
    setContact({ ...contact, [name]: value });

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log({ contact });
  };

  return (
    <div className='grid grid-cols-12 gap-3 md:gap-6 pt-16'>
      <div className='col-span-12 md:col-span-6'>
        <img
          src='/images/ali.jpeg'
          alt='ali haider'
          className='w-full h-3/4 object-cover bg-center bg-cover'
        />
      </div>
      <div className='col-span-12 md:col-span-6'>
        <form
          onSubmit={submit}
          action='mailto:alihaiderdev2646@gamil.com'
          className='bg-neutral-100 p-5'
        >
          <input
            type='text'
            placeholder='Your Name'
            onChange={inputChangeHandler}
            name='name'
            value={name}
            className={inputStyle}
          />
          <input
            type='email'
            placeholder='Your Email'
            onChange={inputChangeHandler}
            name='email'
            value={email}
            className={inputStyle}
          />
          <input
            type='text'
            placeholder='Subject'
            onChange={inputChangeHandler}
            name='subject'
            value={subject}
            className={inputStyle}
          />
          <textarea
            name='message'
            placeholder='Message'
            cols='30'
            rows='10'
            onChange={inputChangeHandler}
            value={message}
            className={inputStyle}
          ></textarea>
          <button
            type='submit'
            className='inline-block bg-indigo-600 py-4 px-8 uppercase rounded-full text-white tracking-wider font-extrabold transition 2s delay-200 duration-300 hover:text-black'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
