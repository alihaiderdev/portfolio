import React from 'react';

const ServiceCard = ({ service: { icon, title, description } }) => {
  console.log({ icon });
  const after = `after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:content-[''] after:w-[30px] after:h-[1px] after:bg-indigo-600 after:mx-auto after:my-0 hover:after:bg-white`;
  return (
    <div className='service_card shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] rounded p-8 text-center cursor-pointer hover:bg-indigo-600 hover:text-white transition 2s duration-300'>
      {/* {icon && <img className='inline-block mb-6' src={icon} alt={title} />} */}
      {/* <span className='before:content-["\f101"]'></span> */}
      {icon}
      <h2 className={`uppercase tracking-widest mb-8 relative`}>{title}</h2>
      <p className='leading-6'>{description}</p>
    </div>
  );
};

export default ServiceCard;
