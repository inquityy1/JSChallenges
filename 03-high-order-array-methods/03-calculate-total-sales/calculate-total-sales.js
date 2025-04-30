function calculateTotalSalesWithTax(items, taxRate) {
  const itemPrice = items.map((item) => {
    return item.price * item.quantity;
  });

  const itemSum = itemPrice.reduce((sum, num) => sum + num, 0);

  const salesTax = itemSum * (taxRate / 100);

  const salesWithTax = itemSum + salesTax;

  return parseFloat(salesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
