import React from "react";
import { Flow } from "../Flow";

type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> & {
    separator?: React.ReactNode;
    children: React.ReactNode;
}

export const Breadcrumbs = ({
    separator="/",
    children
}: BreadcrumbsProps) => {
    const items = React.Children.toArray(children);

    return (
        <Flow direction="horizontal">
            {items.map((child, i) => (
                <React.Fragment key={i}>
                    {child}
                    {i < items.length - 1 && separator}
                </React.Fragment>
            ))}
        </Flow>
    );
}