import React from "react";
import classes from'./Button.css';

const Button = props => {
  const clses = [
    classes.Button,
    classes[props.type]
  ]
  return (
    <button
      onClick = {props.onClick}
      className = "Button primary"
      disabled = {props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button