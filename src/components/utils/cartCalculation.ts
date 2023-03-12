import { lessTenEuroAdd } from './lessTenEurosAdd';

export function cartCalculation(quantity: number, orderPrice: number) {
  const additionQuantity = quantity - 4;
  let cartAddionalFee = 0;
  let cartFee = 0;
  const baseCoefficient = 0.5;
  const addCoefficient = 1.2;
  const minQuantityForBaseCoefficient = 5;
  const maxQuantityForBaseCoefficient = 12;
  const catrPriceMin = 1;
  const cartPriceMax = 10;

  if (quantity >= minQuantityForBaseCoefficient && quantity <= maxQuantityForBaseCoefficient) {
    cartAddionalFee = additionQuantity * baseCoefficient;
  } else if (quantity > maxQuantityForBaseCoefficient) {
    cartAddionalFee = additionQuantity * baseCoefficient + addCoefficient;
  } else {
    cartAddionalFee = 0;
  }

  if (orderPrice >= catrPriceMin && orderPrice < cartPriceMax) {
    cartFee = cartAddionalFee + lessTenEuroAdd(orderPrice);
  } else if (orderPrice >= cartPriceMax) {
    cartFee = cartAddionalFee;
  }

  return cartFee;
}
