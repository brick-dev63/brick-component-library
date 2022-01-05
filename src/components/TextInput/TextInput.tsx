import React, { useState } from "react";
import "./TextInput.scss";

export enum TextInputSize {
  Large = "large",
  Small = "small",
}

export enum TextInputType {
  Text = "text",
  Number = "number",
}

export interface TextInputProps {
  label: string;
  size?: TextInputSize;
  type?: TextInputType;
  value?: string;
}

const TextInput = ({ label, size, type, value }: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const inputClasses = `text-input__input ${
    size == TextInputSize.Large ? "text-input__input--large" : ""
  }`;

  const changeEvent = (e: InputEvent) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-input">
      <label className="text-input__label">{label}</label>
      <span className="text-input__separator">:</span>
      <input
        className={inputClasses}
        type={type || "text"}
        value={inputValue}
        onChange={changeEvent}
      />
    </div>
  );
};

export default TextInput;
