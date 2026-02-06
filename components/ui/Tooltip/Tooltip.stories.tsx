import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Simple popup</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </>
    );
  },
};

export const Sides: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        <TooltipProvider>
          {(["left", "top", "bottom", "right"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button className="w-fit capitalize">{side}</Button>
              </TooltipTrigger>
              <TooltipContent side={side}>
                <p>Simple popup</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    );
  },
};

export const Text: Story = {
  render: (args) => {
    return (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Typography>Hover this text</Typography>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Simple popup</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </>
    );
  },
};
