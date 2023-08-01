import type { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";

const meta: Meta<typeof NavMenu> = {
  title: "NavMenu",
  component: NavMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof NavMenu>;
export const ButtonDefault: Story = {
  args: {

  },
};

export const ButtonPrimary: Story = {
  args: {
  
  },
};

export const ButtonSecondary: Story = {
  args: {
   
  },
};
