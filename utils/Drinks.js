// const dynamicHeight = 18.75;
// 250 / 4000 = 6,25%
// 300 * 6,25% / 100 = 18.75

const dailyGoal = 4000;
let progress = 0;
let height = 300;
export const calculateDrinkProgress = (quantity) => {
  progress += (+quantity / dailyGoal) * 100;
  height = (300 * progress) / 100;

  return [height, progress];
};
