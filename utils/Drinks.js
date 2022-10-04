// const dynamicHeight = 18.75;
// 250 / 4000 = 6,25%
// 300 * 6,25% / 100 = 18.75

import { ACTIVITY_KEY, WEIGHT_KEY } from "../constants/storage";
import { getItem } from "../storage/database";

let progress = 0;
let height = 300;

const getWeightActivity = async () => {
  const weight = await getItem(WEIGHT_KEY);
  const activity = await getItem(ACTIVITY_KEY);

  return { weight, activity };
};

export const calculateDrinkProgress = async (quantity) => {
  const weightActivity = await getWeightActivity();
  const dailyGoal = calcDailyGoal(
    parseInt(weightActivity.weight),
    parseInt(weightActivity.activity)
  );
  progress += Math.round((+quantity / dailyGoal) * 100);
  height = (300 * progress) / 100;
  return [height, progress];
};

export const calcDailyGoal = (weight, activity) => {
  const kgToPounds = weight * 2.2046;
  const waterPerDay = kgToPounds * (2 / 3); //ounces of water per day.
  const extraWater = (activity / 30) * 12;

  const totalWaterPerDay = (waterPerDay + extraWater) * 0.0295735; //To convert ounces in liters we need to multiply by 0.0295735
  return (Math.round((totalWaterPerDay + Number.EPSILON) * 100) / 100) * 1000; // in ml
};
