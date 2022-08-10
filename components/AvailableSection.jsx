import Link from 'next/link';
import React from 'react';

const AvailableSection = () => {
  return (
    <section
      className='relative text-center w-full text-white object-cover bg-center bg-cover -z-[1]'
      style={{
        backgroundImage: `url(https://preview.colorlib.com/theme/ronaldo/images/xbg_1.jpg.pagespeed.ic.4dZ7CYM3I2.webp)`,
      }}
    >
      <div className='opacity-70 bg-indigo-600 w-full h-full absolute top-0 left-0 right-0 -z-[2]'></div>
      <div className='py-16 md:py-24 -z-[1]'>
        <h2 className='font-[poppinsExtraBold] text-3xl md:text-5xl'>
          I am{' '}
          <span className='font-[poppinsExtraBold] text-[#a0f669]'>
            Available
          </span>{' '}
          for freelancing
        </h2>
        <p className='py-6 leading-6 md:w-[45%] md:mx-auto px-4 md:px-0'>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <Link href={'/#contact'} passHref>
          <a className='inline-block bg-indigo-600 py-4 px-8 uppercase rounded-full text-white tracking-wider font-extrabold transition 2s delay-200 duration-300 hover:text-black'>
            Hire Me
          </a>
        </Link>
      </div>
    </section>
  );
};

export default AvailableSection;
