import { baseDeliveryPrice } from './baseDeliveryPrice';

export function distanceCalculation(distance: number, orderPrice: number, quantity: number) {
  const rate = 1;
  const baseFee = baseDeliveryPrice(orderPrice, quantity);
  let additionalDistanceFee = 0;
  const additionalMeters = 500;

  if (distance > 1000) {
    const additionalDistance = Math.ceil(distance / additionalMeters - baseFee);
    additionalDistanceFee = additionalDistance * rate;
  }

  return additionalDistanceFee;
}
