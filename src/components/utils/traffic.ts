import { getTime } from './getTime';
import { getWeekDay } from './getWeekDay';

export function traffic(dateTime: string) {
  const date = new Date(Date.parse(dateTime));

  const weekDay = getWeekDay(date);

  const time = getTime(date);

  let isFriday = 1;

  if (weekDay === 'FRI' && time > '14 59' && time < '19 01') {
    isFriday = 1.2;
  }

  return isFriday;
}
