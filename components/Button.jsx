import React from 'react';

const Button = ({ title, onClick, type, children, rest }) => {
  return (
    <button
      className={`inline-block bg-indigo-800 py-5 px-16 uppercase rounded-full text-white tracking-wider font-extrabold transition 2s delay-200 duration-300`}
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
