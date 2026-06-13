import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";
import { Box } from "../Box";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Basic: Story = {
  argTypes: {
    color: {
      options: ["primary", "secondary", "background", "text"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        gap: 2,
        surface: "background",
        p: 3,
        borderRadius: 1,
      }}
    >
      <Typography variant="h1" {...args}>
        Harmonic Header 1
      </Typography>
      <Typography variant="h2" {...args}>
        Harmonic Header 2
      </Typography>
      <Typography variant="h3" {...args}>
        Harmonic Header 3
      </Typography>
      <Typography variant="h4" {...args}>
        Harmonic Header 4
      </Typography>
      <Typography variant="h5" {...args}>
        Harmonic Header 5
      </Typography>
      <Typography variant="h6" {...args}>
        Harmonic Header 6
      </Typography>
      <Typography variant="body" {...args}>
        Harmonic Body
      </Typography>
      <Typography variant="caption" {...args}>
        Harmonic Caption
      </Typography>
    </Box>
  ),
};
