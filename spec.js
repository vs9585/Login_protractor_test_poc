 describe('Positive and Negative scenaiors for ratemyagent site', function() {
  var url = browser.params.url
  it('should add a todo', function() {
    // var width = 1680;
    // var height = 1024;
    // browser.driver.manage().window().setSize(width, height);

    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.name('email')).sendKeys('vs9585@gmail.com');
    element(by.name('password')).sendKeys('Poonam1$');
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    browser.sleep(1000);
    element(by.css('[ng-click="vm.openAutoSearch()"]')).click();
    element(by.id('searchBox')).sendKeys('vic');
    var victoriaSearchlist = element(by.css('[ng-href="/real-estate-profile/sales/victoria"]'));
    victoriaSearchlist.click();
    element(by.css('[href="/real-estate-agent/stuart-wildblood-bw322/reviews"]')).click();
    element(by.css('[class="rmaShortlistAgent AgentShortlist---addToShortlist---3Xo-Z"]')).click();
    expect(element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()).toEqual('1');
    element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).click();
    var removelist = element.all(by.css('[class="rmaIco ico-cross"]'));
    removelist.get(1).click();
  });
it('invalid password', function() {
 
    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.name('email')).sendKeys('vs9585@gmail.com');
    element(by.name('password')).sendKeys('addaad');
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    var errorMessage=element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()
    expect(errorMessage).toEqual('Sorry, we couldn’t sign you in. You may not have an account with us yet or the details your provided may be incorrect.');
    
  });
  it('invalid email', function() {
 
    var url = browser.params.url
    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.name('email')).sendKeys('v123@gmail.com');
    element(by.name('password')).sendKeys('addaad');
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    var errorMessage=element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()
    expect(errorMessage).toEqual('Sorry, we couldn’t sign you in. You may not have an account with us yet or the details your provided may be incorrect.');
    
  });
it('Email and Password fields blank', function() {
 
    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    var errorMessage=element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()
    expect(errorMessage).toEqual('The Email field is required.The Password field is required.')
  });
  it('valid Email and Password field blank', function() {

    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    var errorMessage=element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()
    expect(errorMessage).toEqual('The Password field is required.')
  });
  it('valid Password and email field blank', function() {
    browser.get(url);
    element(by.css('[ng-click="login()"]')).click();
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    var errorMessage=element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()
    expect(errorMessage).toEqual('The Email field is required.')
  });

  it('Invalid location', function() {
    element(by.css('[ng-click="login()"]')).click();
    element(by.name('email')).sendKeys('vs9585@gmail.com');
    element(by.name('password')).sendKeys('Poonam1$');
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    browser.sleep(1000);
    element(by.css('[ng-click="vm.openAutoSearch()"]')).click();
    element(by.id('searchBox')).sendKeys('000000');
    var noResult=element(by.css('[class="rmaAutoSearchResultSet__noResults ng-scope"]')).getText()
    expect(errorMessage).toEqual('No Results')
   
  });

});
