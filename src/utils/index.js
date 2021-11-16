export const getHSL = (color) => {
  return `hsl(${color.h},${color.s}%, ${color.l}%)`;
};

export const shiftHue = (color, shift) => {
  return {
    ...color,
    h: color.h + shift > 350 ? color.h + shift - 350 : color.h + shift,
  };
};

export const shiftLightness = (color, shift) => {
  return {
    ...color,
    l: color.l + shift,
  };
};
