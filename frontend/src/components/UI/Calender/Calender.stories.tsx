import type { Meta, StoryObj } from "@storybook/react";
import Calender from "./Calender";

const meta: Meta<typeof Calender> = {
  title: "Calender",
  component: Calender,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof Calender>;
export const PricingDefault: Story = {
  args: {},
};

export const PricingPrimary: Story = {
  args: {},
};

export const PricingSecondary: Story = {
  args: {},
};
