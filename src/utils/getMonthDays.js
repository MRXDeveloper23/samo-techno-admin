export const getMonthDays = (val, year) => {
  if (!year && val !== 0) {
    return;
  }
  const daysCount = new Date(year, val, 0).getDate();
  const days = [];
  for (let i = 0; i <= daysCount - 1; i++) {
    days.push({ value: i + 1 });
  }
  return days;
};
