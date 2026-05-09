import React from "react";
import { createClassName, resolveSx } from "../../system";

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
  const resolvedStyle = resolveSx(sx);

  if (!resolvedStyle.minWidth && fullWidth) resolvedStyle.minWidth = "100%";

  return (
    <div
      className={createClassName("box", "root")}
      style={{ ...baseStyle, ...resolvedStyle, ...style }}
      {...rest}
    />
  );
};
