

export interface IRadioInputProps {
  option: IOption;
  onClick: (clickedOp:IOption)=> void;
  disabled?: boolean;
  value?: IOption;
  className?: string;
  style?: React.CSSProperties;
}