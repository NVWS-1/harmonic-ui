import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flow } from "./Flow";
import { Surface } from "../Surface";
import { Typography } from "../Typography";

const meta: Meta<typeof Flow> = {
  title: "Components/Flow",
  component: Flow,
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Basic: Story = {
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" },
    },
    gap: {
      options: [0, 1, 2, 3, 4],
      control: { type: "select" },
    },
    align: {
      options: ["start", "center", "end", "stretch"],
      control: { type: "select" },
    },
    distribute: {
      options: ["start", "center", "end", "between", "around", "evenly"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <Flow
      direction="vertical"
      gap={1}
      align="start"
      distribute="start"
      sx={{ p: 2 }}
      style={{ border: "1px dashed rgba(0,0,0,0.3)", borderRadius: "8px" }}
      {...args}
    >
      <Surface elevation={1} sx={{ p: 3 }}>
        <Typography variant="h4">Element 1</Typography>
      </Surface>

      <Surface elevation={1} sx={{ p: 3 }}>
        <Typography variant="h4">Element 2</Typography>
      </Surface>

      <Surface elevation={1} sx={{ p: 3 }}>
        <Typography variant="h4">Element 3</Typography>
      </Surface>
    </Flow>
  ),
};
