import { InputTypes } from './Types';

export function Calculation(values: InputTypes) {
  if (values.orderPrice >= 100) {
    values.deliveryFee = 50;
  } else {
    values.deliveryFee = 0;
  }
}

function CartCalculation(values: InputTypes) {
  const increase = 10 - values.orderPrice;
  if (values.orderPrice < 10) {
    values.deliveryFee += increase;
  }
}
