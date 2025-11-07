import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Marquee } from "./Marquee";

const meta = {
  title: "Atoms/Marquee",
  component: Marquee,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items: Array(5).fill("Lorem ipsum dolor"),
  },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ManyItems: Story = {
  args: {
    items: Array(15).fill("Lorem ipsum dolor"),
  },
};
