import styled from 'styled-components';

const fontSizes = {
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '25px',
  '3xl': '36px',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const fontColors = {
  default: '#000000',
  warning: '#f5ab00',
  danger: '#ff1f2a',
  secondary: '#4400FB',
  primary: '#004DF8',
  inverted: '#fff',
  success: '#00C34E',
  label: '#969696',
  plainText: '#505050',
};

const TextStyle = styled.div`
  display: inline-block;
  font-weight: ${({ weight }) => weight && fontWeights[weight]};
  text-decoration: ${({ underlined }) => underlined && 'underline'};
  color: ${({ type }) => type && fontColors[type]};
  margin: ${({ margin }) => margin ?? '0px'};
  font-size: ${({ size }) => size && fontSizes[size]};
  line-height: ${({ plainText, lineHeight }) =>
    plainText ? '1.5' : lineHeight};
`;

export default TextStyle;
