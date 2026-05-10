import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Flow } from "../Flow";
import { Typography } from "../Typography";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <Flow direction="vertical" gap={3}>
      <Typography variant="h1">Variants</Typography>
      <Flow direction="horizontal" gap={2} distribute="around">
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost" elevation={0}>
          Ghost
        </Button>
      </Flow>

      <Typography variant="h1">Color</Typography>
      <Flow direction="horizontal" gap={2} distribute="around">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </Flow>

      <Typography variant="h1">Size</Typography>
      <Flow direction="horizontal" gap={2} distribute="around">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Flow>

      <Typography variant="h1">Elevation</Typography>
      <Flow direction="horizontal" gap={2} distribute="around">
        <Button elevation={0}>0</Button>
        <Button elevation={1}>1</Button>
        <Button elevation={2}>2</Button>
        <Button elevation={3}>3</Button>
        <Button elevation={4}>4</Button>
      </Flow>

      <Typography variant="h1">Square</Typography>
      <Flow direction="horizontal" gap={2} distribute="around">
        <Button>False</Button>
        <Button square>True</Button>
      </Flow>
    </Flow>
  ),
};
