import React from "react";
import { ColorBaseRed } from "@brick-dev63/brick-style-dictionary";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const buttonStyle = {
    color: ColorBaseRed,
  }
  return <button style={buttonStyle}>{props.label}</button>;
};

export default Button;