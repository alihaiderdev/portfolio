import React from 'react';

const Button = ({ title, onClick, type, children, rest }) => {
  return (
    <button
      className={`inline-block bg-indigo-600 py-4 px-8 uppercase rounded-full text-white tracking-wider font-extrabold transition 2s delay-200 duration-300 hover:text-black`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
