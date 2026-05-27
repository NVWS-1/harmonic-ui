import { alpha, createClassName, darken, resolveSx, usePressable } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import React, { CSSProperties, useState } from "react";

type ButtonVariant = "solid" | "soft" | "outline" | "ghost";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  sx?: any;
  variant?: ButtonVariant;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  elevation?: 0 | 1 | 2 | 3 | 4;
  toggle?: boolean;
  square?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const baseStyle: CSSProperties = {
  boxSizing: "border-box",
};

export const Button = ({
  sx,
  variant = "solid",
  color = "primary",
  size = "md",
  elevation = 1,
  toggle = false,
  square = false,
  disabled = false,
  onClick,
  style,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  const { hovered, pressed, pressableProps } = usePressable({ onPress: onClick, disabled });

  const resolvedStyle = resolveSx(sx);

  const resolveVariant = (): CSSProperties => {
    switch (variant) {
      case "solid":
        return {
          backgroundColor: disabled
            ? theme.palette.text.disabled
            : pressed
              ? darken(theme.palette[color].main, 0.4)
              : hovered
                ? darken(theme.palette[color].main)
                : theme.palette[color].main,
          color: theme.palette[color].contrastText,
          border: "none",
        };

      case "soft":
        return {
          backgroundColor: disabled
            ? alpha(theme.palette.text.disabled, 0.18)
              : pressed
                ? alpha(theme.palette[color].main, 0.28)
                : hovered
                  ? alpha(theme.palette[color].main, 0.18)
                  : alpha(theme.palette[color].main, 0.12),
          color: disabled ? theme.palette.text.disabled : theme.palette[color].main,
          border: `1px solid ${alpha(theme.palette[color].main, 0.03)}`,
          borderColor: disabled 
            ? alpha(theme.palette.text.disabled, 0.7)
              : pressed
                ? alpha(theme.palette[color].main, 0.85)
                : hovered
                  ? alpha(theme.palette[color].main, 0.7)
                  : alpha(theme.palette[color].main, 0.33),
        };

      case "outline":
        return {
          backgroundColor: disabled
            ? alpha(theme.palette.text.disabled, 0.08)  
              : pressed
              ? alpha(theme.palette[color].main, 0.16)
              : hovered
                ? alpha(theme.palette[color].main, 0.08)
                : "transparent",
          color: disabled 
            ? theme.palette.text.disabled 
            : theme.palette[color].main,
          border: disabled 
            ? `2px solid ${theme.palette.text.disabled}`
            : `2px solid ${theme.palette[color].main}`,
          borderColor: disabled
            ? alpha(theme.palette.text.disabled, 0.8)
              : pressed
              ? alpha(theme.palette[color].main, 1)
              : hovered
                ? alpha(theme.palette[color].main, 0.8)
                : "inherit",
        };

      case "ghost": {
        return {
          backgroundColor: disabled
            ? alpha(theme.palette.text.disabled, 0.08)
              : pressed
              ? alpha(theme.palette[color].main, 0.16)
              : hovered
                ? alpha(theme.palette[color].main, 0.08)
                : "transparent",
          color: disabled ? theme.palette.text.disabled : theme.palette[color].main,
          border: "none",
        };
      }
    }
  };

  const resolveSize = (): CSSProperties => {
    switch (size) {
      case "sm":
        return {
          paddingInline: theme.spacing(1.5),
          paddingBlock: theme.spacing(0.75),
          fontSize: "0.875rem",
          minHeight: "32px",
        };

      case "md":
        return {
          paddingInline: theme.spacing(2),
          paddingBlock: theme.spacing(1),
          fontSize: "1rem",
          minHeight: "40px",
        };

      case "lg":
        return {
          paddingInline: theme.spacing(3),
          paddingBlock: theme.spacing(1.25),
          fontSize: "1.125rem",
          minHeight: "48px",
        };
    }
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),

    boxShadow: theme.elevation[elevation],
    transition: "background-color 150ms ease, box-shadow 150ms ease",

    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    lineHeight: 1,

    borderRadius: square ? "0px" : "16px",

    cursor: disabled ? "not-allowed" : "pointer",

    ...resolveVariant(),
    ...resolveSize(),
  };

  const handleOnClick = () => {
    // TODO
  };

  return (
    <button
      className={createClassName("button", "root")}
      style={{ ...baseStyle, ...buttonStyle, ...resolvedStyle, ...style }}
      {...pressableProps}
      {...rest}
    >
      {children}
    </button>
  );
};
