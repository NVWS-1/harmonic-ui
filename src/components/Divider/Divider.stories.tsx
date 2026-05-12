import { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" },
    },
    thickness: {
      options: [1, 2, 3, 4],
      control: { type: "inline-radio" },
    },
    tone: {
      options: ["muted", "soft", "strong"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["primary", "secondary", "default"],
      control: { type: "inline-radio" },
    },
  },
  render: (args) => <Divider {...args} />,
};
