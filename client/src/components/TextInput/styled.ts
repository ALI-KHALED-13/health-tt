
import styled, { css } from "styled-components";
import type { IStyledInputProps } from "./types";




export const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 0.3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
  font-style: italic;
  color: ${({theme})=> theme.darkGray};
`;

export const StyledInputContainer = styled.div<IStyledInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  margin-top: 0.7rem;
  background-color: transparent;
  ${({theme, readOnly, $error}) => !readOnly && 
    css`
      background-color: ${theme.white};
      border: 1px solid ${$error? theme.coralPink: theme.lightGray};
      padding: 0rem 0.8rem;
    `
  }

  color: ${({theme}) => theme.darkGray};
  border-radius: 1.2rem;

  &:focus-within {
    border: 1px solid ${({theme, readOnly}) => readOnly? "transparent": theme.blue};
  }
  &[readonly] {
    border: none;
  }
`;

export const StyledInput = styled.input<IStyledInputProps>`
  min-height: 4.8rem;
  width: 100%;
  padding: ${({readOnly}) => readOnly? "0": "0.8rem"};
  border: none;
  outline: none;
  flex-grow: 1;
  background: transparent;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  resize: none; // if textarea

  &::placeholder {
    color: #aaa;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledInputNote = styled.p`
  color: ${({theme}) => theme.gray};
  margin: 0.4rem;
  font-size: 1.2rem;
`;

export const StyledError = styled(StyledInputNote)`
  color: ${({theme}) => theme.coralPink};
  font-size: 1.2rem;
`;
