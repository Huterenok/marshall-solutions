export const indexAnimation = (index: number, top?: boolean): string => {
  if (top) {
    if (index == 0) {
      return "fade-down-right";
    } else if (index == 1) {
      return "fade-down";
    } else {
      return "fade-down-left";
    }
  } else {
    if (index == 0) {
      return "fade-up-right";
    } else {
      return "fade-up-left";
    }
  }
};
