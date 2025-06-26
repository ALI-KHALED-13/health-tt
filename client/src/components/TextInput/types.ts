import type { IconProps } from "@phosphor-icons/react";


export interface InputProps {
  value?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>)=> void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>)=> void;
  onKeyUp?: (evt: React.KeyboardEvent)=> void
  readOnly?: boolean;
  type?: string;
  id?: string;
  name?: string;
  pattern?: string;
  title?: string;
  icon?: {
    name: string;
    props?: IconProps;
  };
  placeholder?: string;
  autoFocus?: boolean;
  maxLength?: number;
  required?: boolean;
  style?: React.CSSProperties;
  error?: string;
  note?: string;
  isTextarea?: boolean;
  rows?: number;
  cols?: number;
  maxlength?: number;
  suffix?: React.ReactNode;
  className?: string;
}

export interface IStyledInputProps {
  $error?: string;
  readOnly?: boolean;
}