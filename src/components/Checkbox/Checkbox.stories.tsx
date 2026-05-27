import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Flow } from "../Flow";
import { Typography } from "../Typography";
import { Box } from "../Box";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
    render: () => (
        <Flow direction="vertical" gap={3}>
            <Box>
                <Typography variant="h1">Checkbox</Typography>
                <Checkbox label="Label"/>
            </Box>

            <Box>
                <Typography variant="h1">No Label</Typography>
                <Checkbox />
            </Box>

            <Box>
                <Typography variant="h1">Default Checked</Typography>
                <Checkbox defaultChecked label="Checked by default" />
            </Box>

            <Box>
                <Typography variant="h1">Disabled</Typography>
                <Checkbox disabled label="Disabled" />
            </Box>

            <Box>
                <Typography variant="h1">Color</Typography>
                <Flow direction="horizontal" gap={2} distribute="around">
                    <Checkbox color="primary" label="Primary" />
                    <Checkbox color="secondary" label="Secondary" />
                    <Checkbox color="monotone" label="Monotone" />
                </Flow>
            </Box>

            <Box>
                <Typography variant="h1">Variant</Typography>
                <Flow direction="horizontal" gap={2} distribute="around">
                    <Checkbox variant="default" label="Default" />
                    <Checkbox variant="square" label="Square" />
                    <Checkbox variant="round" label="Round" />
                </Flow>
            </Box>
        </Flow>
    )
};