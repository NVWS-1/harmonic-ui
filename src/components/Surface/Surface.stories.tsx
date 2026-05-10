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
  render: () => (
    <Flow gap={4}>
      <Typography variant="h1">Variant</Typography>
      <Flow direction="horizontal" gap={3}>
        <Surface variant="solid">
          <Typography variant="h4">Solid</Typography>
        </Surface>

        <Surface variant="soft">
          <Typography variant="h4">Soft</Typography>
        </Surface>

        <Surface variant="outline">
          <Typography variant="h4">Outline</Typography>
        </Surface>

        <Surface variant="ghost">
          <Typography variant="h4">Ghost</Typography>
        </Surface>
      </Flow>

      <Typography variant="h1">Color</Typography>
      <Flow direction="horizontal" gap={3}>
        <Surface color="primary">
          <Typography variant="h4">Primary</Typography>
        </Surface>

        <Surface color="secondary">
          <Typography variant="h4">Secondary</Typography>
        </Surface>
      </Flow>

      <Typography variant="h1">Square</Typography>
      <Flow direction="horizontal" gap={3}>
        <Surface>
          <Typography variant="h4">False</Typography>
        </Surface>
        
        <Surface square>
          <Typography variant="h4">True</Typography>
        </Surface>
      </Flow>

      <Typography variant="h1">Elevation</Typography>
      <Flow direction="horizontal" gap={3}>
        <Surface elevation={1}>
          <Typography variant="h4">Elevation 1</Typography>
        </Surface>

        <Surface elevation={2}>
          <Typography variant="h4">Elevation 2</Typography>
        </Surface>

        <Surface elevation={3}>
          <Typography variant="h4">Elevation 3</Typography>
        </Surface>

        <Surface elevation={4}>
          <Typography variant="h4">Elevation 4</Typography>
        </Surface>
      </Flow>
    </Flow>
  ),
};
