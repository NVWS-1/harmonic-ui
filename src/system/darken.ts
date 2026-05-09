export const darken = (hex: string, amount?: number) => {
  const clean = hex.replace("#", "");

  amount = amount ?? 0.2;

  let r = parseInt(clean.slice(0, 2), 16);
  let g = parseInt(clean.slice(2, 4), 16);
  let b = parseInt(clean.slice(4, 6), 16);

  r = Math.max(0, Math.floor(r * (1 - amount)));
  g = Math.max(0, Math.floor(g * (1 - amount)));
  b = Math.max(0, Math.floor(b * (1 - amount)));

  return `rgb(${r}, ${g}, ${b})`;
};
