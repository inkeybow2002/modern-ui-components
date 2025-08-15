import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, children, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  onClick: () => {},
};

export default Button;
