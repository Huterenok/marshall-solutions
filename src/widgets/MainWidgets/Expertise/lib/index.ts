export const indexAnimation = (index: number): string => {
  if (index == 0 || index == 3) {
    return "fade-up-right";
  } else if (index == 2 || index == 5) {
    return "fade-up-left";
  } else {
    return "fade-up";
  }
};
