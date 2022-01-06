class CartPage {
  get productPrices() {
    return $$('//tr/td[4]/strong');
  }
  get totalValue() {
    return $('h3 strong').getText();
  }
  sumOfProducts() {
    const sumOfProducts = this.productPrices
      .map((product) => parseInt(product.getText().split('.')[1].trim()))
      .reduce((acc, price) => acc + price, 0);
    return sumOfProducts;
  }
  totalFormattedPrice() {
    return parseInt(this.totalValue.split('.')[1].trim());
  }
}

module.exports = new CartPage();
