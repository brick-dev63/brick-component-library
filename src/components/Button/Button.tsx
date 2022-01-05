import React from "react";
import "./Button.scss";

export enum ButtonSize {
  Large = "large",
  Small = "small",
}
export interface ButtonProps {
  label: string;
  secondary?: boolean;
  size?: ButtonSize;
}

const Button = ({ label, secondary, size }: ButtonProps) => {
  const classList = `button ${
    size == ButtonSize.Large ? "button--large" : ""
  } ${secondary ? "button--secondary" : ""}`;
  return <button className={classList}>{label}</button>;
};

export default Button;
