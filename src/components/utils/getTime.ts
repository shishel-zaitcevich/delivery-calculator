export function getTime(date: Date) {
  const valueHours = date.getHours();
  const valueMinutes = date.getMinutes();
  const time = valueHours + ' ' + valueMinutes;

  return time;
}
