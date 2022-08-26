const daysOfWeekName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "June",
  6: "July",
  7: "August",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const getFormatedWeekName = (date) => {
  const dayOfWeek = new Date(date).getDay();

  return daysOfWeekName[dayOfWeek];
};
//25 August, 2022

export const getFormatedDate = (date) => {
  let day = new Date(date).getDate();
  if (day <= 9) {
    day = "0" + day;
  }
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  return `${day}, ${monthNames[month]}, ${year}`;
};
