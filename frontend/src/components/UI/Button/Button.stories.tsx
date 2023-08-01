import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: { onClick: { action: "clicked" } },

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const ButtonDefault: Story = {
  args: {
    title: "Button",
    color: "indigo",
    size: "md",
    onClick: () => console.log("Clicked Default Button"),
  },
};

export const ButtonPrimary: Story = {
  args: {
    title: "Button",
    color: "indigo",
    size: "md",
    onClick: () => console.log("Clicked Primary Button"),
  },
};

export const ButtonSecondary: Story = {
  args: {
    title: "Button",
    color: "indigo",
    size: "md",
    onClick: () => console.log("Clicked Secondary Button"),
  },
};
