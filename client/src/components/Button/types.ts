import type {KnownTarget} from 'styled-components/dist/types';

export interface IButtonProps {
  children: string | React.ReactNode;
  color: string;
  as?: KnownTarget;
  hoverColor?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  className?: string;
  to?: string;
  state?: {[key: string]: string};
  target?: string;
  type?: "button" | "submit" | "reset";
}

export interface IStyledButtonProps {
  color: string;
  $hoverColor?: string;
}

