import { createClassName, resolveSx } from "../../system";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

type FlowAlign = "start" | "center" | "end" | "stretch";

type FlowDistribute =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

type FlowProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: any;
  direction?: "horizontal" | "vertical";
  gap?: 0 | 1 | 2 | 3 | 4;
  align?: FlowAlign;
  distribute?: FlowDistribute;
};

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
} as const;

const distributeMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
} as const;

const directionMap = {
  horizontal: "row",
  vertical: "column",
} as const;

const baseStyle: React.CSSProperties = {
  boxSizing: "border-box",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
};

export const Flow = ({
  sx,
  direction = "vertical",
  gap = 1,
  align = "start",
  distribute = "start",
  style,
  ...rest
}: FlowProps) => {
  const theme = useTheme();
  const resolvedStyle = resolveSx(sx);

  resolvedStyle.flexDirection = directionMap[direction];
  resolvedStyle.gap = theme.spacing(gap);
  resolvedStyle.alignItems = alignMap[align];
  resolvedStyle.justifyContent = distributeMap[distribute];

  return (
    <div
      className={createClassName("flow", "root")}
      style={{ ...baseStyle, ...resolvedStyle, ...style }}
      {...rest}
    />
  );
};
