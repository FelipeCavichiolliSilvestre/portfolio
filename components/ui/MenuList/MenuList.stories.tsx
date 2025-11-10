import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CircleIcon } from "lucide-react";
import { MenuList, MenuListItem, MenuListSeparator } from "./MenuList";
import { Card } from "../Card";

const meta = {
  title: "Atoms/MenuList",
  component: MenuList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="p-1">
      <MenuList>
        <MenuListItem>Item 1</MenuListItem>
        <MenuListSeparator />
        <MenuListItem>Item 2</MenuListItem>
        <MenuListItem>Item 3</MenuListItem>
      </MenuList>
    </Card>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Card className="p-1">
      <MenuList>
        <MenuListItem>
          <CircleIcon />
          Item 1
        </MenuListItem>
        <MenuListSeparator />
        <MenuListItem>
          <CircleIcon /> Item 2
        </MenuListItem>
        <MenuListItem>
          <CircleIcon /> Item 3
        </MenuListItem>
      </MenuList>
    </Card>
  ),
};
