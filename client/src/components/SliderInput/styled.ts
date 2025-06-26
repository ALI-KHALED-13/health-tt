import styled from "styled-components";
import { mediaQuery } from "../../utils";



export const StyledMeterBar = styled.meter`
  width: 100%;
  flex-shrink: 0;
  margin-top: -2rem;
  height: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &::-webkit-meter-bar {
    background: none; /* Required to get rid of the default background property */
    background-color: ${({theme})=> theme.lightGray};
    border: none;
  }
  &::-webkit-meter-optimum-value, &::-webkit-meter-suboptimum-value, &::-webkit-meter-even-less-good-value {
    transition: 0.8s width;
  }

`;

export const StyledInputsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  position: absolute;
  bottom: -6px;
  right: 0;
  left: 0;
  height: 100%;
  overflow-y: visible;

  ${mediaQuery('md')}{
    gap: 1rem;
  }
`;