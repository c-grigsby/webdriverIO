const loginPage = require('../pageObjects/loginPage');
const shopPage = require('../pageObjects/shop');
const cartPage = require('../pageObjects/cartPage');
const expectChai = require('chai').expect;
const fs = require('fs');
const e2eCredentials = JSON.parse(
  fs.readFileSync('test/testData/e2eTest.json')
);

describe('Ecommerce Application', () => {
  e2eCredentials.forEach(({ username, password, products }) => {
    // 3 credentials, first: pass, second: fail, third:pass
    it('End to End Test', () => {
      // go to sign-in page
      browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
      // sign-in to Shop
      loginPage.Login(username, password);

      shopPage.link.waitForExist();

      shopPage.addProductToCart(products);

      shopPage.checkoutLink.click();

      const sumOfProducts = cartPage.sumOfProducts();

      const displayedTotal = cartPage.totalFormattedPrice();

      expectChai(sumOfProducts).to.equal(displayedTotal);

      $('.btn-success').click();
      $('#country').setValue('ind');
      $('.lds-ellipsis').waitForExist({ reverse: true });
      $('*=India').click();
      $("input[type='submit']").click();

      expect($('.alert-success')).toHaveTextContaining('Success');
    });
  });
});
