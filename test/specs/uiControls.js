const expectChai = require('chai').expect; //import chai

describe('Ecommerce Application', () => {
  xit('UI Controls', () => {
  
    browser.url('https://rahulshettyacademy.com/loginpagePractise/#');

    $('#username').setValue('rahulshettyacademy');
  
    $('#password').setValue('learning');
   
    const radioBtns = $$('.customradio');
    const userDropDown = radioBtns[1];
   
    userDropDown.$('.radiotextsty').click();
   
    const modal = $('.modal-body');
    $(modal).waitForDisplayed();
   
    $('#cancelBtn').click();

    console.log(userDropDown.$('.radiotextsty').isSelected());
  
    userDropDown.$('.radiotextsty').click();
   
    $(modal).waitForDisplayed();

    $('#okayBtn').click();
 
    const adminBtn = radioBtns[0];
    adminBtn.$('.radiotextsty').click();
   
    expect(modal).not.toBeDisplayed();
  
    const dropdown = $('select.form-control');
    
    dropdown.selectByAttribute('value', 'teach');

    dropdown.selectByVisibleText('Consultant');
    
    dropdown.selectByIndex(0);
  
    dropdown.getValue(); // expect stud
    
    expectChai(dropdown.getValue()).to.equal('stud');
  });

  xit('Dynamic Dropdown Controls', () => {
   
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');

    $('#autocomplete').setValue('ind');
    browser.pause(3000);
    
    let items = $$('li.ui-menu-item div');

    const desiredLocator = items.filter((item) => {
      return item.getText() === 'India';
    });
    
    desiredLocator[0].click();
    browser.pause(3000);
  });

  xit('Checkboxes Identification', () => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    
    const checkboxes = $$('input[type="checkbox"]');
    
    checkboxes[1].click();
 
    console.log(checkboxes[1].isSelected());
    console.log(checkboxes[2].isSelected());
    browser.saveScreenshot('screenshot.png');
  });
});
