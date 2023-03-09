export function getWeekDay(date: Date) {
  const days = ['SUN', 'MON', 'TUE', 'WEN', 'THI', 'FRI', 'SUT'];
  const weekDay = days[date.getDay()];
  // console.log(weekDay);
  return weekDay;
}
