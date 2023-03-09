import { getTime } from './GetTime';
import { getWeekDay } from './GetWeekDay';

export function traffic(dateTime: string) {
  const date = new Date(Date.parse(dateTime));
  const weekDay = getWeekDay(date);
  const time = getTime(date);

  let isFriday = 1;

  if (weekDay === 'FRI' && time >= '15:00' && time <= '19:00') {
    isFriday = 1.2;
  }
  return isFriday;
}
