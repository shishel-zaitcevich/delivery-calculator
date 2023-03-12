export function baseDeliveryPrice(orderPrice: number, quantity: number) {
  let baseDeliveryPrice = 2;
  if (orderPrice <= 0 || quantity <= 0) {
    baseDeliveryPrice = 0;
  }
  return baseDeliveryPrice;
}
