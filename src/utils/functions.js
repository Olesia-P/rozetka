export const countOrderCost = (cart) => {
  const initialValue = 0;
  const sum = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.currentPrice * currentValue.quantity,
    initialValue
  );
  return sum;
};

export const countIndividualProductCost = (product) => {
  const cost = product.currentPrice * product.quantity;
  return cost;
};
