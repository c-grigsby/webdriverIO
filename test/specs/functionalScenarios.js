const expectChai = require('chai').expect;

describe('Functional Testing on Application', () => {
  xit('Scrolling and Mouse Hover', () => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    // scroll into the view of the element
    const mouseHover = $('#mousehover');
    mouseHover.scrollIntoView();
    browser.pause(2000);

    mouseHover.moveTo();
    browser.pause(2000);

    $('=Top').click();
    browser.pause(2000);
  });

  xit('Double Click Functionality', () => {
    browser.url(
      'https://only-testing-blog.blogspot.com/2014/09/selectable.html'
    );

    $('button').doubleClick();

    expectChai(browser.isAlertOpen()).to.be.true;

    expectChai(browser.getAlertText()).to.equal(
      'You double clicked me.. Thank You..'
    );
    // click the okay btn in the alert
    browser.pause(2000);
    browser.acceptAlert();
    browser.pause(2000);
  });

  xit('Web Tables Validation', () => {
    browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    $('th:nth-child(1)').click();

    const wordLocators = $$('tr td:nth-child(1)');
    const words = wordLocators.map((locator) => locator.getText());
    console.log(words);

    const sortedWords = words.slice(); //new copy first
    sortedWords.sort();
    console.log(sortedWords);

    expectChai(words).to.eql(sortedWords);
  });

  xit('Web Table Filter Validation', () => {
    browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    $('#search-field').setValue('tomato');
    const words = $$('tr td:nth-child(1)');
    expect(words).toBeElementsArrayOfSize({ eq: 1 });
    expect(words[0]).toHaveTextContaining('Tomato');
  });
});
