import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

type BreadcrumbItemProps = React.CSSProperties & { 
    href?: string,
    children: React.ReactNode
};

export const BreadcrumbItem = ({ href="", children }: BreadcrumbItemProps) => {
    const theme = useTheme();

    const baseStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(1),

        fontFamily: theme.typography.fontFamily,
        lineHeight: 1,
        color: theme.palette.primary.main,
        fontSize: "0.875rem",
    }
    return (
        <a href={href} style={baseStyle}>
            {children}
        </a>
    )
}