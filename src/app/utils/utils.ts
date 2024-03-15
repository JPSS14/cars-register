export const torqueRating = (value: number) => {
  if (value < 11 && value > 0) {
    return 1;
  } else if (value > 11 && value < 18) {
    return 2;
  } else if (value > 18 && value < 40) {
    return 3;
  } else if (value > 40 && value < 78) {
    return 4;
  } else if (value > 78) {
    return 5;
  } else {
    return 1;
  }
};

export const powerRating = (value: number) => {
  if (value < 85) {
    return 1;
  } else if (value > 85 && value < 105) {
    return 2;
  } else if (value > 105 && value < 480) {
    return 3;
  } else if (value > 480 && value < 590) {
    return 4;
  } else if (value > 590) {
    return 5;
  } else {
    return 1;
  }
};

export const maximumSpeedRating = (value: number) => {
  if (value < 168) {
    return 1;
  } else if (value > 168 && value < 230) {
    return 2;
  } else if (value > 230 && value < 270) {
    return 3;
  } else if (value > 270 && value < 320) {
    return 4;
  } else if (value > 320) {
    return 5;
  } else {
    return 1;
  }
};

export const automakerModelBuilder = (model: string, automaker: string) => {
  return `${automaker} ${model}`;
};
