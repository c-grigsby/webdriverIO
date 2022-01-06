describe('Ecommerce Application', () => {
  xit('Login Failure page title', () => {
    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining('Rahul Shetty Academy');
    //css
    $("input[name='username']").setValue('rahulshettyacademy');

    $('#username').setValue('secondCSS');

    // xpath
    const password = $("//input[@type='password']");

    password.setValue('learning123');
    const signIn = $('#signInBtn');
    signIn.click();

    console.log(
      $('.alert-danger').getText() + 'is the text I am seeing on the screen'
    );

    console.log(
      $('.alert-danger').getText() + 'is the text I am seeing on the screen'
    );
    $('p').getText();
    expect($('p')).toHaveTextContaining(
      '(username is rahulshettyacademy and Password is learning)'
    );
  });

  xit('Login Success Page Title', () => {
    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');

    $("input[name='username']").setValue('rahulshettyacademy');
    const password = $('#password');

    password.setValue('learning');

    $('#signInBtn').click();
    //ASSERT
    // const link = $('*=Checkout');
    // link.waitForExist();
    const navBar = $('.navbar-brand');
    navBar.waitForExist();

    expect(browser).toHaveTitle('ProtoCommerce');

    expect(browser).toHaveUrlContaining('shop');
  });
});

// xit('Login Failure Assertions', () => {
//   browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
//   console.log(browser.getTitle());
//   // assert title of page
//   expect(browser).toHaveTitleContaining('Rahul Shetty Academy');
//   // call Login fn
//   loginPage.Login('rahulshettyacademy', 'learning123');
//   browser.waitUntil(
//     () => {
//       loginPage.signIn.getAttribute('value') === 'Sign In';
//     },
//     { timeout: 4000, timeoutMsg: 'Error Msg did not appear' }
//   );
//   // assert alert message
//   loginPage.textInfo.getText();
//   expect(loginPage.textInfo).toHaveTextContaining(
//     '(username is rahulshettyacademy and Password is learning)'
//   );
// });

// const credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'));
