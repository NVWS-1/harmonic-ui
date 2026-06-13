import type { Meta, StoryObj } from "@storybook/react-vite";
import { Surface } from "./Surface";
import { Typography } from "../Typography";
import { Box } from "../Box";
import { Flow } from "../Flow";

const meta: Meta<typeof Surface> = {
  title: "Components/Surface",
  component: Surface,
};

export default meta;

type Story = StoryObj<typeof Surface>;

export const Basic: Story = {
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "soft", "outline", "ghost"],
    },
    color: {
      control: "radio",
      options: ["primary", "secondary", "background"],
    },
    square: {
      control: "radio",
      options: [true, false],
    },
    elevation: {
      control: "radio",
      options: [0, 1, 2, 3, 4],
    },
  },
  render: (args) => (
    <Flow direction="horizontal" gap={3}>
      <Surface
        variant={args.variant}
        color={args.color}
        square={args.square}
        elevation={args.elevation}
      >
        <Typography variant="h4">Surface</Typography>
      </Surface>
    </Flow>
  ),
};
