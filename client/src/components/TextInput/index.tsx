import { forwardRef, type ForwardedRef } from "react";
import type { InputProps } from "./types";
import * as icons from "../../assets/icons";
import { StyledError, StyledInput, StyledInputContainer, StyledInputNote, StyledLabel } from "./styled";


export const TextInput = forwardRef(({
  value,
  onChange,
  label,
  onBlur,
  onFocus,
  onKeyUp,
  note,
  placeholder,
  autoFocus,
  style,
  maxLength,
  icon,
  type = "text",
  id,
  name,
  readOnly,
  required = false,
  error,
  isTextarea = false,
  rows,
  cols,
  pattern,
  title,
  suffix,
  className,
}: InputProps, ref : ForwardedRef<HTMLInputElement>)=> {
  const DisplayIcon = icon && icons[icon.name as keyof (typeof icons)];

  return (
    <StyledLabel style={style}>
      {label}
      <StyledInputContainer $error={error} readOnly={readOnly} className={className}>
        {DisplayIcon && (
          <DisplayIcon
            size={26}
            weight="bold"
            {...(icon.props? icon.props : {})}
          />
        )}
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={readOnly? "":placeholder}
          required={required}
          readOnly={readOnly}
          autoFocus={autoFocus}
          name={name}
          pattern={pattern}
          title={title}
          onKeyUp={onKeyUp}
          id={id}
          maxLength={maxLength}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
          {...isTextarea
            ? {as: "textarea", rows: rows, cols: cols}
          : {as: "input"}}
        />
        {suffix}
      </StyledInputContainer>
      {(note || required === false) && !readOnly && (
        <StyledInputNote>{note}</StyledInputNote>
      )}
      {error && <StyledError>{error}</StyledError>}
    </StyledLabel>
  );
})