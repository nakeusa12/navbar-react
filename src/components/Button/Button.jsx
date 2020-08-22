import React from 'react'
import './Button.css'

const Styles = ['btn_primary', 'btn_outline']
const Size = ['btn_medium', 'btn_large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0]

  const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
