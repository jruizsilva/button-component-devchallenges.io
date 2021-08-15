import { useState } from 'react';

const useButtonVariant = (variant, color, startIcon, endIcon, side = 'md') => {
  const [backgroundColor, setBackgroundColor] = useState(
    variant === 'outline'
      ? 'white'
      : variant === 'text'
      ? 'white'
      : color === 'primary'
      ? '#2962FF'
      : color === 'secondary'
      ? '#455A64'
      : color === 'danger'
      ? '#D32F2F'
      : '#E0E0E0'
  );
  const [textColor, setTextColor] = useState(
    variant === 'outline'
      ? '#3D5AFE'
      : variant === 'text'
      ? '#3D5AFE'
      : color === 'primary'
      ? 'white'
      : color === 'secondary'
      ? 'white'
      : color === 'danger'
      ? 'white'
      : '#3F3F3F'
  );
  const [borderColor, setBorderColor] = useState(
    variant === 'outline'
      ? '#3D5AFE'
      : variant === 'text'
      ? 'transparent'
      : color === 'primary'
      ? 'transparent'
      : color === 'secondary'
      ? 'transparent'
      : color === 'danger'
      ? 'transparent'
      : 'transparent'
  );
  const [textButton, setTextButton] = useState(
    startIcon ? (
      <>
        <span
          className='material-icons-round'
          style={{
            fontSize: '16px',
            width: '16px',
            height: '16px',
            paddingRight: '8px',
          }}
        >
          {startIcon}
        </span>
        Default
      </>
    ) : endIcon ? (
      <>
        Default
        <span
          className='material-icons-round'
          style={{
            fontSize: '16px',
            width: '16px',
            height: '16px',
            paddingLeft: '8px',
          }}
        >
          {endIcon}
        </span>
      </>
    ) : (
      'Default'
    )
  );
  const [paddingSize, setPaddingSize] = useState(
    side === 'sm'
      ? '6px 12px'
      : side === 'md'
      ? '8px 16px'
      : side === 'lg'
      ? '11px 22px'
      : '8px 16px'
  );
  let handleMouseEnter;
  let handleMouseLeave;

  if (variant === 'outline') {
    handleMouseEnter = () => setBackgroundColor('#2962FF1A');
    handleMouseLeave = () => setBackgroundColor('white');
  } else if (variant === 'text') {
    handleMouseEnter = () => setBackgroundColor('#2962FF1A');
    handleMouseLeave = () => setBackgroundColor('white');
  } else if (color === 'primary') {
    handleMouseEnter = () => setBackgroundColor('#0039CB');
    handleMouseLeave = () => setBackgroundColor('#2962FF');
  } else if (color === 'secondary') {
    handleMouseEnter = () => setBackgroundColor('#1C313A');
    handleMouseLeave = () => setBackgroundColor('#455A64');
  } else if (color === 'danger') {
    handleMouseEnter = () => setBackgroundColor('#9A0007');
    handleMouseLeave = () => setBackgroundColor('#D32F2F');
  } else {
    handleMouseEnter = () => setBackgroundColor('#AEAEAE');
    handleMouseLeave = () => setBackgroundColor('#E0E0E0');
  }

  switch (variant) {
    default:
      break;
  }

  return {
    backgroundColor,
    textColor,
    borderColor,
    textButton,
    paddingSize,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useButtonVariant;
