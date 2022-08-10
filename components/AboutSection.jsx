import React, { useEffect, useRef } from 'react';
import Typed from 'react-typed';
// https://github.com/mattboldt/typed.js/

const about = {
  Name: 'Ali Haider',
  'Date of birth': 'September 19, 1999',
  Address: 'San Francisco CA 97987 USA',
  'Zip Code': 74000,
  Email: 'alihaiderdev2646@gmail.com',
  Phone: '+923092422648',
};

const AboutSection = () => {
  return (
    <div className='about'>
      <div className='text-center'>
        <span className="text-xl font-['poppinsExtraBold'] tracking-wider text-indigo-600">
          HEY! I AM
        </span>
        <h1 className="text-7xl font-['poppinsExtraBold'] py-4">Ali Haider</h1>
        <h6 className="text-2xl font-['poppinsExtraBold']">
          I am a{' '}
          <Typed
            strings={[
              'Mern Stack Developer',
              'WordPress Developer',
              'Next.js Developer',
              'React Native Developer',
              'Devops Engineer',
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
            className='text-indigo-600 type_writer_animated_text'
          />
        </h6>
      </div>
      <div className='grid grid-cols-12 gap-3 md:gap-6 pt-16'>
        <div className='col-span-12 md:col-span-6'>
          <img
            src='/images/ali.jpeg'
            alt='ali haider'
            className='w-full h-3/4 object-cover bg-center bg-cover'
          />
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div className='py-12'>
            <h2 className="text-5xl font-['poppinsExtraBold']">About Me</h2>
            <p className='py-5 text-neutral-400'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <ul className='my-5'>
              {Object.entries(about).map(([key, value], index) => {
                return (
                  <li key={index} className='pb-5 text-neutral-400'>
                    <span className='w-1/4 inline-block text-black font-poppins'>
                      {key}:
                    </span>
                    {value}
                  </li>
                );
              })}
            </ul>
            <h2 className='text-xl mb-10'>
              <span className='text-indigo-600 font-poppins'>120</span> Project
              complete
            </h2>
            <a
              href='/resume.pdf'
              className='inline-block bg-indigo-600 py-4 px-8 uppercase rounded-full text-white tracking-wider font-extrabold transition 2s delay-200 duration-300 hover:text-black'
              download
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
