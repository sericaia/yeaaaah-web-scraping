var request = require("request"),
	cheerio = require("cheerio"),
	url = "http://pt.yeaaaah.com/city/1/concertos-em-lisboa/";
	
request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body);
			
		console.log("website found!");
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});