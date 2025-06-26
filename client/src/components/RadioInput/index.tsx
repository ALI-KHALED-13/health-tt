import {
  StyledOption, 
  StyledOptionLabel,
  StyledRadioInput,
  StyledRadioInputFill
} from "./styled";
import type { IRadioInputProps } from "./types";




const RadioInput =({
  value,
  option,
  onClick,
  disabled,
  className,
  children,
  style
}:IRadioInputProps)=>{

  const isSelected = option.value === value?.value;

  
  return (
  <StyledOption
    $isSelected={isSelected}
    className={className}
    disabled={disabled}
    onClick={()=> !disabled && onClick(option)}
    style={style}
  >
    <StyledRadioInput className='btn' $isSelected={isSelected} disabled={disabled} type="button">
      { isSelected && <StyledRadioInputFill /> }
    </StyledRadioInput>

    <StyledOptionLabel $isSelected={isSelected} disabled={disabled}>
      {option.display}
    </StyledOptionLabel>

    {children} {/* used in exceptional cases only, ideally we should have a unified style (without children) */}
  </StyledOption>
 );
  
}

export default RadioInput;