import React from 'react';
import useButtonVariant from '../hooks/useButtonVariant';
const Button = ({
  variant,
  color,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
}) => {
  const {
    backgroundColor,
    textColor,
    borderColor,
    textButton,
    paddingSize,
    handleMouseEnter,
    handleMouseLeave,
  } = useButtonVariant(variant, color, startIcon, endIcon, size);

  const buttonStyles = {
    backgroundColor,
    color: !disabled ? textColor : '#9E9E9E',
    border: `1px solid ${borderColor}`,
    padding: paddingSize,
    borderRadius: '6px',
    outline: 'none',
    fontFamily: 'Noto Sans JP',
    fontWeight: 500,
    fontSize: '14px',
    boxShadow: !disableShadow && '0px 2px 3px rgba(51, 51, 51, 0.2)',
    cursor: !disabled ? 'pointer' : 'not-allowed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={!disabled ? handleMouseEnter : null}
      onMouseLeave={!disabled ? handleMouseLeave : null}
    >
      {textButton}
    </button>
  );
};

export default Button;
