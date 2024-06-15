export const randomNumber = () => {
  return Math.floor(Math.random() * (30 - 0 + 1) + 0);
};

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
};
