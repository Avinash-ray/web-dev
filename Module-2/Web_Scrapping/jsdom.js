const request= require('request')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link= "https://sports.ndtv.com/ipl-2022"

request(link, function (error, response, html) {
    if(error)
  console.error('error:', error); // Print the error if one occurred
  
  else{
  // console.log('body:', html); // Print the HTML for the Google homepage.
  const dom= new JSDOM(html)
  const document= dom.window.document

  let teamsName= document.querySelectorAll(".scr_tm-wrp .scr_tm-nm")
  console.log(teamsName[0].textContent);
  console.log(teamsName[1].textContent);
  console.log(teamsName[2].textContent);
  console.log(teamsName[3].textContent);
  console.log(teamsName[4].textContent);
  console.log(teamsName[5].textContent);
  }
});