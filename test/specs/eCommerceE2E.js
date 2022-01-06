const expectChai = require('chai').expect;

describe('Ecommerce Application', () => {
  it('End to End Test', () => {
    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
    // locators-SignIn page
    const password = $("//input[@type='password']");
    const signIn = $('#signInBtn');
    const link = $('*=ProtoCommerce Home');
    const username = $("input[name='username']");
    const products = ['Blackberry', 'Nokia Edge'];

    // Sign In to Shop
    username.setValue('rahulshettyacademy');
    password.setValue('learning');
    signIn.click();
    link.waitForExist();

    // Get Item
    const cards = $$("div[class='card h-100']");
    cards
      .filter((card) => products.includes(card.$('div h4 a').getText())) //returns 2 el
      .map((productCard) => productCard.$('.card-footer button').click());
    browser.pause(3000);

    const checkoutLink = $('*=Checkout');
    checkoutLink.click();

    const productPrices = $$('//tr/td[4]/strong');

    const sumOfProducts = productPrices
      .map((product) => parseInt(product.getText().split('.')[1].trim()))
      .reduce((acc, price) => acc + price, 0);
    console.log(sumOfProducts);

    const totalValue = $('h3 strong').getText();

    const displayedTotal = parseInt(totalValue.split('.')[1].trim());

    expectChai(sumOfProducts).to.equal(displayedTotal);

    $('.btn-success').click();

    $('#country').setValue('ind');

    $('.lds-ellipsis').waitForExist({ reverse: true });

    $('*=India').click();

    $("input[type='submit']").click();

    expect($('.alert-success')).toHaveTextContaining('Success');
  });
});
