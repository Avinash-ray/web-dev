const request= require('request')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link= "https://www.espncricinfo.com/series/ranji-trophy-2021-22-2022-1280196/bengal-vs-madhya-pradesh-1st-semi-final-1313307/live-cricket-score"

request(link, function (error, response, html) {
    if(error)
  console.error('error:', error); // Print the error if one occurred
  
  else{
  // console.log('body:', html); // Print the HTML for the Google homepage.
  const dom= new JSDOM(html)
  const document= dom.window.document

  let teamsName= document.querySelectorAll(".ds-inline-flex.ds-items-center.ds-leading-none .ds-text-tight-l.ds-font-bold")
  console.log(teamsName[0].textContent);
  console.log(teamsName[1].textContent);
  }
});