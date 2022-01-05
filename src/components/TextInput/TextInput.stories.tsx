import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";
import { TextInputSize, TextInputType } from "./TextInput";

export default {
  title: "Brick Library/Text Input",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Template = (props) => <TextInput label="Text Input" {...props} />;
export const Large = () => (
  <TextInput label="Large" size={TextInputSize.Large} />
);
export const TextType = () => (
  <TextInput label="Text Type" type={TextInputType.Text} />
);
export const NumberType = () => (
  <TextInput label="Number Type" type={TextInputType.Number} />
);
