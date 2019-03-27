//BETA
// This bot will post a predefined comment as fast as possible to a new post on the target profile
describe('Instagram fast commenter', function() {

function spongeMock(text) {
  var res = [];
  var next = Math.floor(Math.random() * 3) + 1; // random number from [1,3]
  for(var i = 0; i < text.length; ++i) {
    if(i === next) {
	  res += text.charAt(i).toUpperCase();
	  next += Math.floor(Math.random() * 3) + 1; 
	} else {
	  res += text.charAt(i);
	}
  }
  return res;
}

  // Edit the information below!
  // Target page
  const targetURL = 'https://www.instagram.com/sadiegg13';
  var numberOfPostsOnTargetProfile = 145;
  //const commentText = '<placeholder>';
  // My instagram user information
  const myUsername = '_nonbinarybot_';
  const myPassword = 'RobotTake0ver69';
  // Number of times the page should refresh
  // Each iteration takes around 2.5 seconds
  // 30000 iterations take aproximately 21 hours to complete ((2.5*30000)/3600) = 20.88 hours
  var numberOfIterations = 30000;

  // Do not edit the information below (unless you know what you're doing)!

  // This code runs once for loging into your account
  browser.driver.get('https://www.instagram.com/accounts/login/');
  browser.driver.sleep(1000);
  browser.driver.findElement(by.css('[name="username"]')).sendKeys(myUsername);
  browser.driver.findElement(by.css('[name="password"]')).sendKeys(myPassword);
  browser.driver.findElement(by.css('.L3NKy')).click(); //This is the login button
  browser.driver.sleep(1000);
  browser.driver.get(targetURL);
  browser.driver.sleep(1000);

  // Main function that runs in loop
  function instaAutoCommenter(numberOfIterations){
    it('Finding caption text and sending keys', function() {
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

          //var captionText;
          browser.driver.findElement(by.xpath('//html/body/div[2]/div[2]/div/article/div[2]/div[1]/ul/li[1]/div/div/div/span/')).getText().then( (data) => {
          	console.log(data);
          });
          //var innerText = caption;
          
          //console.log(plz);

      	  //browser.driver.findElement(by.css('.Ypffh')).sendKeys(spongeMock(fuck)); // get innerText to be a string!!!
      	  browser.driver.findElement(by.css('.Ypffh')).sendKeys(protractor.Key.ENTER);

          browser.driver.sleep(2000); 
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
