const getCartPrice = (cart) => {
  const vatRate = 0.23;
  const totalPrice = cart.reduce((acc, el) => acc + el.quantity * el.product.price, 0);
  const subTotal = +(totalPrice / (1 + vatRate)).toFixed(2);
  const vat = +(subTotal * vatRate).toFixed(2);
  return { total: subTotal + vat, vat, subTotal };
};

export default getCartPrice;
