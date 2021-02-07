import React from 'react';
import { ButtonStyle } from './ButtonStyle';

const Button = ({ children, onClick, htmlType, disabled }) => {
  return (
    <ButtonStyle
      disabled={disabled}
      type={htmlType}
      onClick={!disabled ? onClick : null}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  onClick: () => {},
  htmlType: '',
};

export default Button;
