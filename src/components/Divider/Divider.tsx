import { useTheme } from "../../theme/ThemeProvider";
import { alpha, resolveSx } from "../../system";
import React from "react";

type DividerProps = React.HTMLAttributes<HTMLElement> & {
  sx?: any;
  tone?: "muted" | "soft" | "strong";
  orientation?: "horizontal" | "vertical";
  color?: "default" | "primary" | "secondary";
  thickness?: 1 | 2 | 3 | 4;
};

export const Divider = ({
  sx,
  tone = "soft",
  orientation = "horizontal",
  color = "default",
  thickness = 1,
  style,
  ...rest
}: DividerProps) => {
  const theme = useTheme();

  const resolvedStyle = resolveSx(sx);

  const resolveColor = (): React.CSSProperties => {
    return {
      backgroundColor:
        tone === "muted"
          ? alpha(theme.palette[color].main, 0.08)
          : tone === "soft"
            ? alpha(theme.palette[color].main, 0.18)
            : alpha(theme.palette[color].main, 0.42),
    };
  };

  return orientation === "horizontal" ? (
    <hr
      style={{
        border: "none",
        margin: 0,

        height: `${thickness}px`,
        width: "100%",

        borderRadius: "999px",

        ...resolveColor(),
        ...resolvedStyle,
        ...style,
      }}
      {...rest}
    />
  ) : (
    <div
      role="separator"
      aria-orientation="vertical"
      style={{
        flexShrink: 0,

        width: `${thickness}px`,
        alignSelf: "stretch",

        borderRadius: "999px",

        ...resolveColor(),
        ...resolvedStyle,
        ...style,
      }}
      {...rest}
    />
  );
};
