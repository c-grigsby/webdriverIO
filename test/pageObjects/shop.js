class Shop {
  get link() {
    return $('*=ProtoCommerce Home');
  }
  get checkoutLink() {
    return $('*=Checkout');
  }
  get cards() {
    return $$("div[class='card h-100']");
  }

  addProductToCart(products) {
    return this.cards
      .filter((card) => products.includes(card.$('div h4 a').getText()))
      .map((productCard) => productCard.$('.card-footer button').click());
  }
}

module.exports = new Shop();
