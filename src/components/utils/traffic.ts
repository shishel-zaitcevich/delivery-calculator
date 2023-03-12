import { getTime } from './getTime';
import { getWeekDay } from './getWeekDay';

export function traffic(dateTime: string) {
  const date = new Date(Date.parse(dateTime));
  const weekDay = getWeekDay(date);
  const time = getTime(date);
  const trafficDay = 'FRI';
  const minTrafficTime = '14:59';
  const maxTrafficTime = '19:01';

  let isFriday = 1;

  if (weekDay === trafficDay && time > minTrafficTime && time < maxTrafficTime) {
    isFriday = 1.2;
  }

  return isFriday;
}
