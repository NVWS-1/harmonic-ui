import React, { useState } from "react";
import { createClassName, darken, resolveSx, usePressable } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import { Typography } from "../Typography";

type ColorType = "primary" | "secondary" | "default";

type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
    sx?: any;
    variant?: "default" | "square" | "round";
    color?: "primary" | "secondary" | "monotone";
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
};

export const Checkbox = ({ 
    sx,
    variant = "default",
    color = "primary",
    checked,
    defaultChecked,
    disabled,
    onChange,
    label,
    style, ...rest }: CheckboxProps) => {
    const theme = useTheme();
    const [internalChecked, setInternalChecked] = useState(Boolean(defaultChecked));

    const { hovered, pressableProps } = usePressable();

    const isChecked = checked !== undefined ? checked : internalChecked;
    const resolvedColor: ColorType =
        color === "monotone" ? "default" : color;

    const rootStyles: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        gap: theme.spacing(1),
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none"
    };

    const resolvedSx = resolveSx(sx);

    const inputStyles: React.CSSProperties = {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none"
    };

    const boxStyles: React.CSSProperties = {
        width: 18,
        height: 18,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: variant === "square" ? "0" : variant === "round" ? "50%" :"6px",
        border: disabled 
            ? `2px solid ${theme.palette.text.disabled}` 
            : hovered
                ? `2px solid ${darken(theme.palette[resolvedColor].main, 0.3)}`
                : `2px solid ${theme.palette[resolvedColor].main}`,
        
        backgroundColor: isChecked 
            ? theme.palette[resolvedColor].main
            : "transparent",

        transition:
            "background-color 150ms ease, border-color 150ms ease"
    };

    const labelStyles: React.CSSProperties = {
        fontFamily: theme.typography.fontFamily,
        color: disabled ? theme.palette.text.disabled : theme.palette.text.main
    };

    const handleToggle = () => {
        if (disabled) return;

        const next = !isChecked;

        onChange?.(next);

        if (checked === undefined) {
            setInternalChecked(next);
        }
    };

    return (
        <label
            {...pressableProps}
            className={createClassName("checkbox", "root")}
            style={{ ...rootStyles, ...resolvedSx, ...style }}
        >
            <input
                type="checkbox"
                className={createClassName("checkbox", "input")}
                checked={isChecked}
                disabled={disabled}
                onChange={handleToggle}
                style={inputStyles}
            />

            <div
                className={createClassName("checkbox", "box")}
                style={boxStyles}
            >
                {isChecked &&(
                    <div
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: variant == "round" ? "50%" : 2,
                            backgroundColor: theme.palette.primary.contrastText
                        }}
                    />
                )}
            </div>

            {label && (
                <span 
                    className={createClassName("checkbox", "label")}
                    style={labelStyles}
                >
                    <Typography variant="body">
                        {label}
                    </Typography>
                </span>
            )}
        </label>
    )
}