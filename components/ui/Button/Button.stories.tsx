import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";
import { CircleIcon } from "lucide-react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    variant: {
      control: "select",
      options: ["default", "noShadow", "neutral", "reverse"],
      type: "string",
    },
  },
  args: { onClick: fn() },
  render: (args) => <Button {...args}>Button</Button>,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DefaultWithLeftIcon: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      <CircleIcon /> Button
    </Button>
  ),
};

export const DefaultWithRightIcon: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      Button <CircleIcon />
    </Button>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
  },
  render: (args) => (
    <Button {...args}>
      <CircleIcon />
    </Button>
  ),
};

export const NoShadow: Story = {
  args: {
    variant: "noShadow",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};

export const Reverse: Story = {
  args: {
    variant: "neutral",
  },
};
