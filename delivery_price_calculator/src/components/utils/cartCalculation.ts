import { lessTenEuroAdd } from './lessTenEurosAdd';

export function cartCalculation(quantity: number, orderPrice: number) {
  const additionQuantity = quantity - 4;
  let cartAddionalFee = 0;
  let cartFee = 0;

  if (quantity >= 5 && quantity <= 12) {
    cartAddionalFee = additionQuantity * 0.5;
    // console.log('from 5 to 12', cartAddionalFee);
  } else if (quantity >= 13) {
    cartAddionalFee = additionQuantity * 0.5 + 1.2;
    // console.log('>12', cartAddionalFee);
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
