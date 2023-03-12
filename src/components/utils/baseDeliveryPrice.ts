export function baseDeliveryPrice(orderPrice: number, quantity: number) {
  let baseDeliveryPrice = 2;
  const invalidOrderPrice = 0;
  const invalidQuantity = 0;
  if (orderPrice <= invalidOrderPrice || quantity <= invalidQuantity) {
    baseDeliveryPrice = 0;
  }
  return baseDeliveryPrice;
}
