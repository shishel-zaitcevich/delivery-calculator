import { InputTypes } from './Types';
import { CartCalculation } from './calculateFunctions/CartCalculation';
import { DistanceCalculation } from './calculateFunctions/DistanceCalculation';
import { baseDeliveryPrice } from './calculateFunctions/BaseDeliveryPrice';
import { traffic } from './calculateFunctions/Traffic';

export function Calculation(values: InputTypes) {
  const baseFee = baseDeliveryPrice(values.orderPrice, values.quantity);
  const cartFee = CartCalculation(values.quantity, values.orderPrice);
  const additionalDistanceFee = DistanceCalculation(
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
