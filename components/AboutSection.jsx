import React, { useEffect, useRef } from 'react';
import Typed from 'react-typed';
// https://github.com/mattboldt/typed.js/

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
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 pt-16'>
        {/* <div className='image_container'> */}
        <img
          src='/images/ali.jpeg'
          alt='ali haider'
          className='w-full h-3/4 object-cover'
        />

        {/* </div> */}
        <div className='py-12 md:pl-12'>
          <h2 className="text-5xl font-['poppinsExtraBold']">About Me</h2>
          <p className='py-5 text-neutral-400'>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul className='my-5'>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Name:
              </span>
              Ali Haider
            </li>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Date of birth:
              </span>
              September 19, 1999
            </li>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Address:
              </span>
              San Francisco CA 97987 USA
            </li>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Zip code:{' '}
              </span>
              74000
            </li>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Email:
              </span>{' '}
              alihaiderdev2646@gmail.com
            </li>
            <li className='pb-5 text-neutral-400'>
              <span className='w-1/4 inline-block text-black font-poppins'>
                Phone:
              </span>{' '}
              +923092422648
            </li>
          </ul>
          <h2 className='text-xl mb-10'>
            <span className='text-indigo-600 font-poppins'>120</span> Project
            complete
          </h2>
          <a
            href='/resume.pdf'
            className="inline-block bg-indigo-600 py-4 px-6 uppercase rounded-3xl text-white font-['poppinsSemiBold']"
            download
          >
            Download Cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
