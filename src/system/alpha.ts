export const alpha = (color: string, value: number) => {
  return `${color}${Math.round(value * 255)
    .toString(16)
    .padStart(2, "0")}`;
};
