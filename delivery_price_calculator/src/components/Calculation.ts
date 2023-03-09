import { InputTypes } from './Types';
import { cartCalculation } from './utils/cartCalculation';
import { distanceCalculation } from './utils/distanceCalculation';
import { baseDeliveryPrice } from './utils/baseDeliveryPrice';
import { traffic } from './utils/traffic';

export function Calculation(values: InputTypes) {
  const baseFee = baseDeliveryPrice(values.orderPrice, values.quantity);
  const cartFee = cartCalculation(values.quantity, values.orderPrice);
  const additionalDistanceFee = distanceCalculation(
    values.distance,
    values.orderPrice,
    values.quantity
  );
  const isTraffic = traffic(values.dateTime);

  if (values.orderPrice >= 100) {
    values.deliveryFee = 0;
  }

  values.deliveryFee = (additionalDistanceFee + cartFee + baseFee) * isTraffic;

  if (values.deliveryFee > 15) {
    values.deliveryFee = 15;
  }

  return values.deliveryFee;
}
