import styled from 'styled-components';

export const Wrapper = styled.form``;

export const Input = styled.input`
  height: 50px;
  display: grid;
  width: calc(100vw - 1.1rem);
  border: none;
  font-size: 18px;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
