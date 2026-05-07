import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";
import { Typography } from "../Typography";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    sx: {
      display: "flex",
      direction: "column",
      p: 2,
      m: 0,
      px: 0,
      py: 20,
      gap: 2,
      surface: "background",
      tone: "soft",
      text: "body",
      opacity: 100,
      borderRadius: 2,
    },
    fullWidth: true,
    children: <Typography>This is a HarmonicUI Box</Typography>,
  },
};
