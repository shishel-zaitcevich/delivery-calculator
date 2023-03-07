import { InputTypes } from './Types';

export function Calculation(values: InputTypes) {
  const baseFee = 2;
  let increase = 10 - values.orderPrice;
  let cartFee = 0;
  let cartAddionalFee = 0;
  let additionalFee = 0;

  if (values.orderPrice >= 100) {
    values.deliveryFee = 0;
  }

  function CartCalculation(values: InputTypes) {
    const additionQuantity = values.quantity - 4;
    if (values.quantity >= 5 && values.quantity <= 12) {
      cartAddionalFee = additionQuantity * 0.5;
    } else if (values.quantity >= 13) {
      cartAddionalFee = additionQuantity * 0.5 + 1.2;
    } else {
      cartAddionalFee = 0;
    }

    if (values.orderPrice > 0 && values.orderPrice < 10) {
      cartFee = cartAddionalFee + increase;
    } else if (values.orderPrice >= 10) {
      increase = 0;
    }
    console.log(cartFee);
    return cartFee;
  }

  CartCalculation(values);

  function DistanceCalculation(values: InputTypes) {
    const rate = 1;
    if (values.distance > 1000) {
      const additionalDistance = Math.ceil(values.distance / 500 - baseFee);
      additionalFee = additionalDistance * rate;
    }
    return additionalFee;
  }

  DistanceCalculation(values);

  values.deliveryFee = additionalFee + cartFee + baseFee;

  function traffic(values: InputTypes) {
    const date = new Date(Date.parse(values.dateTime));
    let weekDay = '';
    let time = '';
    console.log(date);
    function getWeekDay(date: Date) {
      const days = ['SUN', 'MON', 'TUE', 'WEN', 'THI', 'FRI', 'SUT'];
      weekDay = days[date.getDay()];
      return weekDay;
    }

    getWeekDay(date);

    function getTime(values: InputTypes) {
      time = values.dateTime.slice(11, 16);
      return time;
    }

    getTime(values);

    if (weekDay === 'FRI' && time >= '15:00' && time <= '19:00') {
      values.deliveryFee *= 1.2;
    }
  }

  traffic(values);

  if (values.deliveryFee > 15) {
    values.deliveryFee = 15;
  }

  return values.deliveryFee;
}
