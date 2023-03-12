export function lessTenEuroAdd(orderPrice: number) {
  const minCartValue = 10;
  const tenEuroadd = minCartValue - orderPrice;
  return tenEuroadd;
}
