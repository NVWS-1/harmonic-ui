import React from "react";
import { theme } from "../theme/theme";

type SxProps = {
  display?: "flex" | "block" | "inline-flex";
  direction?: "row" | "column";

  p?: number;
  m?: number;
  px?: number;
  py?: number;

  gap?: number;

  surface?: "primary" | "secondary" | "background";
  tone?: "soft" | "solid" | "muted";

  text?: "header" | "body" | "caption" | "muted";

  opacity?: number;
  borderRadius?: number;
};

export const resolveSx = (sx?: SxProps): React.CSSProperties => {
  if (!sx) return {};

  const styles: React.CSSProperties = {};

  // Layout
  if (sx.display) styles.display = sx.display;
  if (sx.direction) styles.flexDirection = sx.direction;

  // Spacing
  if (sx.p) styles.padding = theme.spacing(sx.p);
  if (sx.m) styles.margin = theme.spacing(sx.m);

  if (sx.px) {
    styles.paddingLeft = theme.spacing(sx.px);
    styles.paddingRight = theme.spacing(sx.px);
  }

  if (sx.py) {
    styles.paddingTop = theme.spacing(sx.py);
    styles.paddingBottom = theme.spacing(sx.py);
  }

  // Gap
  if (sx.gap) styles.gap = theme.spacing(sx.gap);

  // Surface & Tone
  if (sx.surface) {
    // Canvas
    if (sx.surface === "background") {
      styles.backgroundColor = theme.palette.background.main;
      styles.color = theme.palette.background.contrastText;
      return styles;
    }

    // Surface
    const color = theme.palette[sx.surface as keyof typeof theme.palette]?.main;

    if (color) {
      if (sx.tone === "soft") {
        styles.backgroundColor = `${color}22`;
        styles.color = color;
      } else if (sx.tone === "muted") {
        styles.backgroundColor = `${color}11`;
        styles.color = color;
      } else {
        styles.backgroundColor = color;
        styles.color =
          theme.palette[sx.surface as keyof typeof theme.palette]
            ?.contrastText || "#fff";
      }
    }
  }

  // Misc
  if (sx.opacity) styles.opacity = sx.opacity;
  if (sx.borderRadius) styles.borderRadius = theme.spacing(sx.borderRadius);

  return styles;
};
