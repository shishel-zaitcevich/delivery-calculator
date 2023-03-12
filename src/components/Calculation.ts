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
  const cartPriceForFreeDelivery = 100;
  const freeDelivery = 0;
  const maxDeliveryPrice = 15;

  values.deliveryFee = (additionalDistanceFee + cartFee + baseFee) * isTraffic;

  if (values.orderPrice >= cartPriceForFreeDelivery) {
    values.deliveryFee = freeDelivery;
  }
  if (values.deliveryFee > maxDeliveryPrice) {
    values.deliveryFee = maxDeliveryPrice;
  }

  if (values.dateTime === '') {
    values.deliveryFee = freeDelivery;
  }

  return values.deliveryFee;
}
