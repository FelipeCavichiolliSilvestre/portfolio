import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Textarea } from "./Textarea";
import { Label } from "@/components/ui/Label";

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: (args) => {
    return (
      <>
        <Label htmlFor="textarea">Mensagem</Label>
        <Textarea id="textarea" {...args} />
      </>
    );
  },
};

export const MinHeight: Story = {
  args: {
    className: "min-h-50",
  },
};
