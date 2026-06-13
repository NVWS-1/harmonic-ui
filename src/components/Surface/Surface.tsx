import { alpha, createClassName, resolveSx } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: any;
  variant?: "solid" | "soft" | "outline" | "ghost";
  color?: "primary" | "secondary" | "background";
  square?: boolean;
  elevation?: 0 | 1 | 2 | 3 | 4;
};

const baseStyle: React.CSSProperties = {
  boxSizing: "border-box",
  font: "inherit",
};

export const Surface = ({
  sx,
  variant = "solid",
  color = "primary",
  square = false,
  elevation = 1,
  style,
  ...rest
}: SurfaceProps) => {
  const theme = useTheme();

  const resolvedStyle = resolveSx(sx);

  const resolveVariant = (): React.CSSProperties => {
    switch (variant) {
      case "solid": {
        return {
          backgroundColor: theme.palette[color].main,
          color: theme.palette[color].contrastText,
          border: `2px solid ${theme.palette[color].main}`,
        };
      }

      case "soft": {
        return {
          backgroundColor: alpha(theme.palette[color].main, 0.12),
          color:
            color === "background"
              ? alpha(theme.palette.background.contrastText, 0.78)
              : theme.palette[color].main,
          padding: "25px",
          border:
            color === "background"
              ? `1px solid ${alpha(theme.palette.background.contrastText, 0.23)}`
              : `1px solid ${alpha(theme.palette[color].main, 0.23)}`,
        };
      }

      case "outline": {
        return {
          backgroundColor: "transparent",
          color:
            color === "background"
              ? theme.palette.background.contrastText
              : theme.palette[color].main,
          border:
            color === "background"
              ? `2px solid ${theme.palette.background.contrastText}`
              : `2px solid ${theme.palette[color].main}`,
        };
      }

      case "ghost": {
        return {
          backgroundColor: "transparent",
          color:
            color === "background"
              ? theme.palette.background.contrastText
              : theme.palette[color].main,
          padding: "26px",
          border: "none",
        };
      }
    }
  };

  const surfaceStyle: React.CSSProperties = {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.background.contrastText,

    borderRadius: square === false ? "16px" : "0px",
    boxShadow: theme.elevation[elevation],

    padding: theme.spacing(3),

    transition: "background-color 150ms ease, box-shadow 150ms ease",

    ...resolveVariant(),
  };

  return (
    <div
      className={createClassName("surface", "root")}
      style={{ ...baseStyle, ...surfaceStyle, ...resolvedStyle, ...style }}
      {...rest}
    ></div>
  );
};
