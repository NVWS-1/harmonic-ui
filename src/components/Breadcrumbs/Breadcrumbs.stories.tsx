import { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "./Breadcrumbs";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { Flow } from "../Flow";
import { Typography } from "../Typography";

const meta: Meta<typeof Breadcrumbs> = {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
    render: () => (
        <Flow direction="vertical" gap={3}>
            <Typography variant="h1">Breadcrumbs</Typography>
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Page 1</BreadcrumbItem>
                <BreadcrumbItem>Page 2</BreadcrumbItem>
            </Breadcrumbs>

            <Typography variant="h1">Custom Separator</Typography>
            <Breadcrumbs separator=">">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Page 1</BreadcrumbItem>
                <BreadcrumbItem>Page 2</BreadcrumbItem>
            </Breadcrumbs>
        </Flow>
    )
};