import styled from 'styled-components';

export const ButtonStyle = styled.div`
  height: 50px;
  padding: 0 1rem;
  background-color: #f0f0f0;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  ${({ disabled }) =>
    disabled
      ? `
    cursor: default;
    opacity: .5;
  `
      : `
  &:active {
    opacity: 0.7;
  };

  &:hover {
    background-color: #dedede;
  }
  `}
`;
