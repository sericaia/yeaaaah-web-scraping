var request = require("request"),
cheerio = require("cheerio"),
url = "http://pt.yeaaaah.com/city/1/concertos-em-lisboa/";


var jsonData = [];

request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
		links = $("a");


		links.each(function (i, link) {
			// get the href attribute of each link
			var url = $(link).attr("href"),				
				name;

			if(typeof link.children[0].data != undefined){
				name = link.children[0].data;
			}

			var contentData = {
				url: url,
				name: name
			}
			jsonData.push(contentData);

		});

		console.log(jsonData);
		console.log("TOTAL: " + links.length)
		

		console.log("website found!");
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});