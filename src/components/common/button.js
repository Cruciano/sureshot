import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-full px-4 py-1.5 bg-pink-dark border border-pink-dark border-solid text-white text-base
       hover:bg-transparent hover:text-pink-dark transition
       ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;