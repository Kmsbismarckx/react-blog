import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};

export default Button;
