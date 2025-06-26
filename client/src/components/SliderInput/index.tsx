import RadioInput from "../RadioInput";
import { StyledInputsContainer, StyledMeterBar } from "./styled";



const SliderInput =({
  steps,
  value,
  onChange
}: {
  steps: IOption[],
  value?: IOption,
  onChange: (selectedStep: IOption)=> void
})=> {

  const valueIdx = steps.findIndex(step=> step.value == value?.value);

  return (
    <div style={{position: 'relative', minHeight: '40px'}}>
      <StyledMeterBar
        min={0}
        max={steps.length - 1}
        value={valueIdx}
        low={steps.length / 2}
        optimum={steps.length / 1.5}
        high={steps.length - 1}
      />
      <StyledInputsContainer>
        {steps.map(step=> (
          <RadioInput
            key={step.value}
            value={value}
            option={step}
            onClick={(clickedOp)=> onChange(clickedOp)}
            style={{flexDirection: 'column', gap: 5, background: 'transparent'}}
          />
        ))}
      </StyledInputsContainer>
    </div>
  );
}


export default SliderInput;
