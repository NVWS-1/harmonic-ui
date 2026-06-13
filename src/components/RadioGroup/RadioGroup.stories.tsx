import { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { Typography } from "../Typography";
import { Flow } from "../Flow";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  render: (args) => {
    const [value, setValue] = useState("1");

    return (
      <>
        <RadioGroup
          title="RadioGroup"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
          ]}
          value={value}
          onChange={setValue}
          defaultValue="1"
          direction={args.direction}
        />

        <div style={{ height: "100px" }} />
        <Flow direction="vertical">
          <Typography variant="h4">Selected Value:</Typography>
          <Typography variant="body">{value}</Typography>
        </Flow>
      </>
    );
  },
};
