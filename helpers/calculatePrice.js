export default basket =>
  basket
    ? basket.items.reduce((total, item) => total + item.price, 0).toFixed(2)
    : "";
