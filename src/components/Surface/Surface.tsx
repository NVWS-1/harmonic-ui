import { createClassName, resolveSx } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: any;
  elevation?: 0 | 1 | 2 | 3 | 4;
};

const baseStyle: React.CSSProperties = {
  boxSizing: "border-box",
  font: "inherit",
};

export const Surface = ({
  sx,
  elevation = 1,
  style,
  ...rest
}: SurfaceProps) => {
  const theme = useTheme();

  const resolvedStyle = resolveSx(sx);

  const surfaceStyle: React.CSSProperties = {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.background.contrastText,

    borderRadius: "16px",
    boxShadow: theme.elevation[elevation],

    transition: "background-color 150ms ease, box-shadow 150ms ease",
  };

  return (
    <div
      className={createClassName("surface", "root")}
      style={{ ...baseStyle, ...surfaceStyle, ...resolvedStyle, ...style }}
      {...rest}
    ></div>
  );
};
