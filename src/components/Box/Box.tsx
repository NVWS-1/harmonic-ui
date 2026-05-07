import React from "react";
import { resolveSx } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: any;
  fullWidth?: boolean;
};

const baseStyle: React.CSSProperties = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  font: "inherit",
  minWidth: 0,
};

export const Box = ({ sx, fullWidth, style, ...rest }: BoxProps) => {
  const theme = useTheme();

  const resolvedStyle = resolveSx(sx);

  if (!resolvedStyle.minWidth && fullWidth) resolvedStyle.minWidth = "100%";

  return (
    <div
      className="harmonic-box-root"
      style={{ ...baseStyle, ...resolvedStyle, ...style }}
      {...rest}
    />
  );
};
