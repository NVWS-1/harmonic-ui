import { alpha, createClassName, resolveSx } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: any;
  variant?: "solid" | "soft" | "outline" | "ghost";
  color?: "primary" | "secondary";
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
          border: "none",
        };
      }

      case "soft": {
        return {
          backgroundColor: alpha(theme.palette[color].main, 0.12),
          color: theme.palette[color].main,
          border: `1px solid ${alpha(theme.palette[color].main, 0.23)}`
        }
      }

      case "outline": {
        return {
          backgroundColor: "transparent",
          color: theme.palette[color].main,
          border: `2px solid ${theme.palette[color].main}`
        }
      }

      case "ghost": {
        return {
          backgroundColor: "transparent",
          color: theme.palette[color].main,
          border: "none"
        }
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

    ...resolveVariant()
  };

  return (
    <div
      className={createClassName("surface", "root")}
      style={{ ...baseStyle, ...surfaceStyle, ...resolvedStyle, ...style }}
      {...rest}
    ></div>
  );
};
