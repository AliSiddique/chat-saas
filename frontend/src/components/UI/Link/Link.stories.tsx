import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof Link>;
export const PricingDefault: Story = {
  args: {
    href: "https://www.google.com",
  },
};

export const PricingPrimary: Story = {
  args: {
    href: "https://www.google.com",
  },
};

export const PricingSecondary: Story = {
  args: {
    href: "https://www.google.com",
  },
};
