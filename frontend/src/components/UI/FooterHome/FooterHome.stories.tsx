import type { Meta, StoryObj } from "@storybook/react";
import FooterHome from "./FooterHome";

const meta: Meta<typeof FooterHome> = {
  title: "FooterHome",
  component: FooterHome,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof FooterHome>;
export const PricingDefault: Story = {
  args: {},
};

export const PricingPrimary: Story = {
  args: {},
};

export const PricingSecondary: Story = {
  args: {},
};
