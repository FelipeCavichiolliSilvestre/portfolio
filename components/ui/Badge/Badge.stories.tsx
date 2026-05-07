import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./Badge";
import { CircleIcon } from "lucide-react";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "neutral"],
      type: "string",
    },
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const DefaultWithLeftIcon: Story = {
  args: {},
  render: (args) => (
    <Badge {...args}>
      <CircleIcon /> Badge
    </Badge>
  ),
};

export const DefaultWithRightIcon: Story = {
  args: {},
  render: (args) => (
    <Badge {...args}>
      Badge <CircleIcon />
    </Badge>
  ),
};

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
};
