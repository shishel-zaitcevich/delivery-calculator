import { lessTenEuroAdd } from './lessTenEurosAdd';

export function cartCalculation(quantity: number, orderPrice: number) {
  const additionQuantity = quantity - 4;
  let cartAddionalFee = 0;
  let cartFee = 0;
  const baseCofficient = 0.5;
  const addCofficient = 1.2;

  if (quantity >= 5 && quantity <= 12) {
    cartAddionalFee = additionQuantity * baseCofficient;
  } else if (quantity >= 13) {
    cartAddionalFee = additionQuantity * baseCofficient + addCofficient;
  } else {
    cartAddionalFee = 0;
  }

  if (orderPrice > 0 && orderPrice < 10) {
    cartFee = cartAddionalFee + lessTenEuroAdd(orderPrice);
  } else if (orderPrice >= 10) {
    cartFee = cartAddionalFee;
  }

  return cartFee;
}
