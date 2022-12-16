import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-full px-4 py-1.5 bg-pink-dark text-white text-base
       ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;