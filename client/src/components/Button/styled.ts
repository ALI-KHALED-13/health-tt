
import styled from 'styled-components';
import { getColor } from '../../utils';
import type { IStyledButtonProps } from './types';

export const StyledButton = styled.button<IStyledButtonProps>`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 1.2rem;
  border-style: solid;
  border-width: 2px;
  padding: 1rem 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease-in;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  & svg {
    flex-shrink: 0;
  }
  &:disabled:hover {
    background-color: ${({color, theme}) => getColor(theme, color)};
  }
`;

export const StyledPrimaryButton = styled(StyledButton)<IStyledButtonProps>`
  border-color: ${({color, theme}) => getColor(theme, color)};
  background-color: ${({color, theme}) => getColor(theme, color)};
  color: ${({theme}) => theme.white};
  &:hover {
    background-color: ${({$hoverColor, theme}) => getColor(theme, $hoverColor || "")};
    border-color: ${({$hoverColor, theme}) => getColor(theme, $hoverColor || "")};
  }
`;


export  const StyledSecondaryButton = styled(StyledButton)<IStyledButtonProps>`
  background-color: transparent;
  color: ${({color, theme}) => getColor(theme, color)};
  border-color: ${({color, theme}) => getColor(theme, color)};
  transition: background-color 0.2s linear;

  & > svg {
    fill: ${({color, theme}) => getColor(theme, color)};
  }
  &:hover {
    background-color:  ${({color, theme}) => getColor(theme, color)};
    color: white;
    &:not(:disabled) > svg {
      fill: white;
    }
  }
  
  &:disabled:hover {
    background-color: transparent;
    color: ${({color, theme}) => getColor(theme, color)};
  }
`;

export const StyledGhostButton = styled.button<IStyledButtonProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid ${({theme})=> theme.lightGray};
  color: ${({theme, disabled, color}) => getColor(theme, disabled? "gray": color)};
  padding: 0.5rem;
  border-radius: 1.2rem;
  cursor: ${( {disabled} )=> disabled? "not-allowed": "pointer"};
  border: none;
  ;
  &:hover {
    background-color:  ${({theme, color}) => getColor(theme, color, 5)};
  }
  &:disabled:hover {
    background-color: transparent;
    border: none;
  }
  & svg {
    flex-shrink: 0;
  }
`;