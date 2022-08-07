import React from 'react';

const Section = ({ id, title, description, children }) => {
  return (
    <section className='py-24' id={id}>
      <div className='text-center'>
        {title && (
          <h2 className='font-[poppinsExtraBold] tracking-wide sm:text-4xl sm:mb-4 md:text-5xl md:mb-8'>
            {title}
          </h2>
        )}
        {description && <p className='text-neutral-400'>{description}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
