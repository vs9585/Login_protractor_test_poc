// describe('Enter GURU99 Name', function() {
//   it('should add a Name as GURU99', function() {
//   browser.get('https://angularjs.org');
//   element(by.model('yourName')).sendKeys('GURU99');
//    var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
//  expect(guru.getText()).toEqual('Hello GURU99!');
//    });
//  });


 describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://www.ratemyagent.com.au/');
    element(by.css('[ng-click="login()"]')).click();
    element(by.name('email')).sendKeys('vs9585@gmail.com');
    element(by.name('password')).sendKeys('Poonam1$');
    element(by.css('[ng-click="SubmitLogin()"]')).click();
    element(by.css('[ng-click="vm.openAutoSearch()"]')).click();
    element(by.id('searchBox')).sendKeys('vic');
    var victoriaSearchlist = element.all(by.css('[ng-if="vm.results"]'));
    // browser.sleep(10000);
    victoriaSearchlist.get(0).click(); 
    browser.sleep(1000000);
    // element.all(by.css('[class="LinkPanel---this---BFobg"]')).get(0).click();
    browser.sleep(1000000);
    element(by.css('[href="/real-estate-agent/karen-renouf/reviews/98-333-colburn-ave-victoria-point-aaetpk"]')).click();
    // browser.sleep(10000);
    element(by.css('[class="rmaShortlistAgent"]')).click();
    expect(element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()).toEqual('1');
    element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).click();
    // browser.navigate().back();
    // element(by.css('[href="/real-estate-agent/liliana-panaccio/reviews/24-scarlet-oak-ave-melton-west-aakmx8"]')).click();
    // element(by.css('[class="rmaShortlistAgent"]')).click();
   // element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getValue().toEqual(2);
    var removelist = element.all(by.css('[class="rmaIco ico-cross"]'));
    removelist.get(1).click();
    expect(element(by.css('[class="rmaHeaderShortlistCount__count ng-binding"]')).getText()).toEqual('0');
  });
});