import React from 'react';
import Button from './Button';

const AvailableSection = () => {
  return (
    <div
      className='text-center w-full text-white object-cover bg-center bg-cover -z-[100]'
      style={{
        backgroundImage: `url(https://preview.colorlib.com/theme/ronaldo/images/xbg_1.jpg.pagespeed.ic.4dZ7CYM3I2.webp)`,
      }}
    >
      <div className='opacity-80 bg-indigo-600 w-full h-full'>
        <div className='py-24'>
          <h2 className='font-[poppinsExtraBold] text-2xl md:text-5xl'>
            I am{' '}
            <span className='font-[poppinsExtraBold] text-[#a0f669]'>
              Available
            </span>{' '}
            for freelancing
          </h2>
          <p className='py-6 leading-6 w-[45%] mx-auto'>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <Button title={'Hire Me'} onClick={() => console.log('clicked')} />
        </div>
      </div>
    </div>
  );
};

export default AvailableSection;
