

export interface IRadioInputProps {
  option: IOption;
  onClick: (clickedOp:IOption)=> void;
  disabled?: boolean;
  value?: IOption;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}