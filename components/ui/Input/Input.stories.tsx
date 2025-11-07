import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./Input";
import { Label } from "@/components/ui/Label";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => <Input {...args} />,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    type: "email",
    placeholder: "Email",
  },
};

export const WithLabel: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
  render: (args) => (
    <>
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" />
    </>
  ),
};
