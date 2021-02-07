import React from 'react';

import TextStyle from './TextStyle';

const Text = ({
  children,
  weight,
  type,
  margin,
  size,
  plainText,
  lineHeight,
}) => (
  <TextStyle
    weight={weight}
    type={type}
    margin={margin}
    size={size}
    plainText={plainText}
    lineHeight={lineHeight}>
    {children}
  </TextStyle>
);

Text.defaultProps = {
  children: null,
  size: 'md',
  margin: '0px',
  weight: 'regular',
  type: 'default',
  underlined: false,
  plainText: false,
  lineHeight: '1.25',
};

export default Text;
