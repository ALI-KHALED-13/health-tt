
import type { IStyledComponentBase, Substitute } from 'styled-components/dist/types';
import type { IButtonProps, IStyledButtonProps} from './types';
import { StyledGhostButton, StyledPrimaryButton, StyledSecondaryButton } from './styled';



const Button = ({
  as,
  children,
  color,
  hoverColor,
  disabled,
  variant = "primary",
  onClick,
  style,
  className,
  to,
  target,
  type = 'button'
}: IButtonProps ) => {
  const buttonVariants = {
    "primary": StyledPrimaryButton,
    "secondary": StyledSecondaryButton,
    "ghost": StyledGhostButton
  }
  const ButtonVariant = buttonVariants[variant] as IStyledComponentBase<"web", Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, IStyledButtonProps>> & string;
  return (
    <ButtonVariant
      
      as={as}
      color={color}
      disabled={disabled}
      $hoverColor={hoverColor} // transient prop which is consumed only by styled components
      onClick={onClick}
      style={style}
      className={className}
      to={to}
      target={target}
      type={type}
    >
      {children}
    </ButtonVariant>
  );
};

export default Button;