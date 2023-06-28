export const format = (num: number): { value: string; color: string } => {
  const decimal = num.toString().length;

  if (decimal < 6) {
    return { color: "#ffff00", value: String(num) };
  }
  if (decimal < 8) {
    return { color: "#ffffff", value: Math.round(num / 1000) + "K" };
  }
  return { color: "#00ff80", value: Math.round(num / 1000000) + "M" };
};
