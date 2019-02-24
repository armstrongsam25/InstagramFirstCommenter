
// This bot will post a predefined comment as fast as possible to a new post on the target profile
describe('Instagram fast commenter', function() {

  // Edit the information bellow!
  // Target page
  const targetURL = 'https://www.instagram.com/myTargetPage';
  var numberOfPostsOnTargetProfile = 69;
  const commentText = 'This is the comment I am posting';
  // My instagram user information
  const myUsername = 'myUsername';
  const myPassword = 'myPassword123';
  // Number of times the page should refresh
  // Each iteration takes around 2.5 seconds
  // 30000 iterations take aproximately 21 hours to complete ((2.5*30000)/3600) = 20.88 hours
  var numberOfIterations = 30000;

  // Do not edit the information bellow!

  // This code runs once for loging into your account
  browser.driver.get('https://www.instagram.com/accounts/login/');
  browser.driver.sleep(1000);
  browser.driver.findElement(by.css('[name="username"]')).sendKeys(myUsername);
  browser.driver.findElement(by.css('[name="password"]')).sendKeys(myPassword);
  browser.driver.findElement(by.css('._L3NKy')).click(); //This is the login button
  browser.driver.sleep(1000);
  browser.driver.get(targetURL);
  browser.driver.sleep(1000);

  // Main function that runs in loop
  function instaAutoCommenter(numberOfIterations){
    it('I dont know why this is here but okay', function() {
          //The below element is for the num of followers target acct has
      browser.driver.findElement(by.css('.g47SY')).getText().then( (data) => { 
        console.log(numberOfIterations);
        console.log(data);
        var auxNumberOfPosts = data.replace(',',''); //replaces the , in total posts number
        auxNumberOfPosts = parseInt(auxNumberOfPosts, 10);
        console.log(auxNumberOfPosts);
        if(auxNumberOfPosts != numberOfPostsOnTargetProfile){
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('._9AhH0')).click(); //Most recent post 
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('.Ypffh')).click(); //comment button
          browser.driver.sleep(200);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(commentText);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(protractor.Key.ENTER);
          browser.driver.sleep(5000); //changes from 2000 to this
          numberOfPostsOnTargetProfile++;
        }
        browser.driver.sleep(2500);
        browser.driver.get(targetURL);

      });

    });
  }

  // Very long loop
  while(numberOfIterations > 0){
    instaAutoCommenter(numberOfIterations);
    if(numberOfIterations != 0){
      numberOfIterations--;
    }
  }

});
