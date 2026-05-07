export const theme = {
  palette: {
    primary: {
      main: "#5B6CFF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8B5CF6",
      contrastText: "#ffffff",
    },
    default: {
      main: "#000",
      contrastText: "#fff",
    },
    background: {
      main: "#F6F8FC",
      contrastText: "#111827",
    },
  },
  typography: {
    fontFamily: "Arial",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
  elevation: {
    0: "none",
    1: "0 1px 2px rgba(0,0,0,0.08)",
    2: "0 2px 8px rgba(0,0,0,0.10)",
    3: "0 4px 16px rgba(0,0,0,0.12)",
    4: "0 8px 24px rgba(0,0,0,0.14)",
  },
  spacing: (value: number) => `${value * 8}px`,
};

// Dark
// Background #0F172A
// Background Contrast #F8FAFC
