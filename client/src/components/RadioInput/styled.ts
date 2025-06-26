

import styled, { css } from "styled-components";


interface IStyledRadioProps {
  disabled?: boolean;
  $isSelected: boolean;
}

export const StyledOption = styled.li<IStyledRadioProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  position: relative;
  cursor: ${( {disabled} )=> disabled? 'not-allowed' : 'pointer'};
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme, $isSelected})=> $isSelected? theme.darkGraphite: 'transparent'};
  transition: background-color 0.3s ease-in-out;
  &:hover .btn {
    ${({ $isSelected, disabled, theme})=> !$isSelected &&  !disabled &&
     css`
      background-color: ${theme.lightGray};
    `}
  }

`;

export const StyledRadioInput = styled.button<IStyledRadioProps>`
  border-radius: 50%;
  min-width: 1.6rem;
  min-height: 1.6rem;
  flex-shrink: 0;
  border: 1.5px solid ${({disabled, theme, $isSelected})=> disabled? '#afafaf' : $isSelected? theme.whisperingFrost: theme.lightGray};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: inherit;
  transition: background-color 0.2s ease-in-out;


  ${({ $isSelected, disabled, theme})=> $isSelected && css`
      background-color: ${disabled? '#afafaf' :theme.whisperingFrost};
      
  `}

`;

export const StyledRadioInputFill = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid ${({theme})=> theme.darkGraphite};
  background-color: ${({theme})=> theme.whisperingFrost}; // same as unselected StyledRadioUnput's background-color: ;
`;


export const StyledOptionLabel = styled.p<IStyledRadioProps>`
  color: ${( {disabled, theme, $isSelected} )=> theme[disabled ? "gray" : $isSelected? "whisperingFrost": "darkGraphite"]};
  font-weight: ${( {$isSelected} )=> $isSelected && "bold"};
  font-size: inherit;
`;