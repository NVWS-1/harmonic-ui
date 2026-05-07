import { createClassName } from "../..//system";
import { useTheme } from "../../theme/ThemeProvider";
import React, { CSSProperties } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: "primary" | "secondary" | "background";
  contrast?: boolean;
};

export const Typography = ({
  variant = "body",
  as,
  color = "primary",
  contrast = false,
  style,
  children,
  ...rest
}: TypographyProps) => {
  const theme = useTheme();

  const variantStyle = theme.typography[variant];

  const Component = as || (variant.startsWith("h") ? variant : "p");

  const resolveColor = (): CSSProperties => {
    if (color) {
      return {
        color: contrast
          ? theme.palette[color].contrastText
          : theme.palette[color].main,
      };
    } else {
      return {
        color: contrast
          ? theme.palette.primary.contrastText
          : theme.palette.primary.main,
      };
    }
  };

  return (
    <Component
      className={createClassName("typography", "root")}
      style={{
        margin: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: variantStyle.fontSize,
        fontWeight: variantStyle.fontWeight,
        lineHeight: variantStyle.lineHeight,
        opacity: variant === "caption" ? 0.6 : 1,
        ...resolveColor(),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
