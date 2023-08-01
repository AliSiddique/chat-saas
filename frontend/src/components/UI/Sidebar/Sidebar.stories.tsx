import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import Shop from "../../Shop";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
export const ButtonDefault: Story = {
  args: {
    children: <Shop />,
    Open: false,
  },
};

export const ButtonPrimary: Story = {
  args: {
    children: "Primary",
    Open: false,
  },
};

export const ButtonSecondary: Story = {
  args: {
    children: "Secondary",
    Open: true,
  },
};
