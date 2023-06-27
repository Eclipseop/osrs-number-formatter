export const format = (num: number): string => {
  const decimal = num.toString().length;
  if (decimal < 6) {
    return num + "";
  }
  if (decimal < 8) {
    return Math.round(num / 1000) + "K";
  }
  if (decimal < 11) {
    return Math.round(num / 1000000) + "M";
  }

  return Math.round(num / 1000000000) + "B";
};
