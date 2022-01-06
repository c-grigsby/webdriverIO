describe('Windows and Frames Miscellaneous', () => {
  xit('Parent and Child windows switch', () => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');
   
    $('#openwindow').click();
    const handles = browser.getWindowHandles();//0th index: parent window, 1st index: child 
    
    browser.switchToWindow(handles[1]);

    console.log(browser.getTitle());
   
    browser.maximizeWindow();
    
    browser.closeWindow();
  
    browser.switchToWindow(handles[0]);
    console.log(browser.getTitle());

    browser.newWindow('https://rahulshettyacademy.com/#/index');
    const title = browser.getTitle();
    browser.switchWindow('https://rahulshettyacademy.com/AutomationPractice/');
    $('#name').setValue(title);
    browser.pause(3000);
    browser.switchWindow(title); //switch back newWindow
    console.log(browser.getUrl());
  });

  xit('Frames switch', () => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    
    $('#mousehover').scrollIntoView();
 
    console.log($$('a').length);
    
    browser.switchToFrame($('#courses-iframe'));
    
    $('=Courses').getTagName();

    console.log($$('a').length);
  
    browser.switchToFrame(null); 
    console.log($$('a').length);
  });
});
