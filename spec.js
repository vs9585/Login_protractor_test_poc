 describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    // var width = 1680;
    // var height = 1024;
    // browser.driver.manage().window().setSize(width, height);
    browser.get('https://www.ratemyagent.com.au/');
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
});