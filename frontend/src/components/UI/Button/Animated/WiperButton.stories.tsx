import type { Meta, StoryObj } from "@storybook/react";
import Button from "./WiperButton";

const meta: Meta<typeof Button> = {
  title: "WiperButton",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const ButtonDefault: Story = {
  args: {
    title: "Button",
  },
};

export const ButtonPrimary: Story = {
  args: {
    title: "Button",
  },
};

export const ButtonSecondary: Story = {
  args: {
    title: "Button",
  },
};
