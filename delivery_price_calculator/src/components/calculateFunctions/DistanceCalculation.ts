import { baseDeliveryPrice } from './BaseDeliveryPrice';

export function DistanceCalculation(distance: number, orderPrice: number, quantity: number) {
  const rate = 1;
  const baseFee = baseDeliveryPrice(orderPrice, quantity);
  let additionalDistanceFee = 0;

  if (distance > 1000) {
    const additionalDistance = Math.ceil(distance / 500 - baseFee);
    additionalDistanceFee = additionalDistance * rate;
  }
  // console.log(additionalDistanceFee);
  return additionalDistanceFee;
}
