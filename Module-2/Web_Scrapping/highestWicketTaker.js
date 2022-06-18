const request= require('request')
const jsdom= require("jsdom")
const {JSDOM}= jsdom

const link= "https://www.espncricinfo.com/series/south-africa-in-india-2022-1278669/india-vs-south-africa-4th-t20i-1278690/full-scorecard"

request(link,cb)

function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        console.log(html)
        const dom= new JSDOM(html)
        const document= dom.window.document
    }
}

