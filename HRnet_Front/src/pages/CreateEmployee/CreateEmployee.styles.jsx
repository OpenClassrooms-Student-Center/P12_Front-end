import { styled, createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  background-color: #009879;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  max-width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: 2px solid #0078d4;
    border-color: transparent;
  }
`;

export const Fieldset = styled.fieldset`
  border: 1px solid white;
  border-radius: 4px;
  padding: 15px;
`;

export const Legend = styled.legend`
  font-size: 1.2em;
  font-weight: bold;
  padding: 0 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin: 20px auto;
  background-color: rgb(0, 128, 255);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(0, 102, 204);
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;