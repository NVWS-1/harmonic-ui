import type { Meta, StoryObj } from "@storybook/react-vite";
import { Surface } from "./Surface";
import { Typography } from "../Typography";
import { Box } from "../Box";

const meta: Meta<typeof Surface> = {
  title: "Components/Surface",
  component: Surface,
};

export default meta;

type Story = StoryObj<typeof Surface>;

export const Showcase: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        p: 4,
      }}
    >
      <Surface elevation={1} sx={{ p: 3 }}>
        <Typography variant="h4">Elevation 1</Typography>
      </Surface>

      <Surface elevation={2} sx={{ p: 3 }}>
        <Typography variant="h4">Elevation 2</Typography>
      </Surface>

      <Surface elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Elevation 3</Typography>
      </Surface>

      <Surface elevation={4} sx={{ p: 3 }}>
        <Typography variant="h4">Elevation 4</Typography>
      </Surface>
    </Box>
  ),
};
