import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDoc from "./Button.mdx";
import Button from "./Button";
import { ButtonSize } from "./Button";

export default {
  title: "Brick Library/Button",
  component: Button,
  parameters: {
    docs: {
      page: ButtonDoc,
    },
  },
} as ComponentMeta<typeof Button>;

export const Template = (props) => <Button label="Template" {...props} />;
export const Large = () => <Button label="Large" size={ButtonSize.Large} />;
export const Primary = () => <Button label="Primary" />;
export const Secondary = () => (
  <Button label="Secondary" secondary={true} size={ButtonSize.Large} />
);
