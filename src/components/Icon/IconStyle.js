import styled from 'styled-components';

const Wrapper = styled.div`
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  cursor: ${({ cursor }) => cursor};
  z-index: ${({ zIndex }) => zIndex};
  margin: ${({ margin }) => margin ?? '0px'};
  ${({ cursor, disabled }) =>
    cursor == 'pointer' &&
    !disabled &&
    `
    &:hover {
        opacity: 0.7;
    };
    &:active {
        opacity: 0.5;
    }
    `};
  ${({ disabled }) =>
    disabled &&
    `
        opacity: 0.3;
        cursor: default;
    `}
`;

export default Wrapper;
