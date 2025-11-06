import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography, TypographyProps } from "./Typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "d1",
        "d2",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p1",
        "p2",
        "p3",
      ],
      type: "string",
    },
    weight: {
      control: "select",
      options: ["thin", "regular", "bold", "extrabold"],
      type: "string",
    },
  },
  render: function Render({ variant, ...args }) {
    const allVariants: TypographyProps<"p">["variant"][] = [
      "d1",
      "d2",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p1",
      "p2",
      "p3",
    ];

    return (
      <>
        {allVariants.map((variant) => (
          <Typography
            className="py-1.5"
            variant={variant}
            key={variant}
            {...args}
          >
            {variant?.startsWith("d") && "Display"}
            {variant?.startsWith("h") && "Heading"}
            {variant?.startsWith("p") && "Paragraph"} 0{variant?.[1]}
          </Typography>
        ))}
      </>
    );
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {
    weight: {
      control: "select",
      options: ["thin", "regular", "bold", "extrabold"],
      type: "string",
    },
  },
};
