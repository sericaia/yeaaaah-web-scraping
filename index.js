var request = require("request"),
cheerio = require("cheerio"),
url = "http://pt.yeaaaah.com/city/1/concertos-em-lisboa/";


var jsonData = [];

request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
		concerts = $('table[class=concerts]').find('tr');


		concerts.each(function (i, concert) {
			// get the href attribute of each concert
			var name = $(this).find($('.artists')).text().trim();
			var url = $(this).find($('.artists > a')).attr('href');
			var date = $(this).parent().prev().text();
			var cityvenue = $(this).find($('.city_venue')).text().trim();

			var contentData = {
				url: url,
				name: name,
				date: date,
				city_venue: cityvenue
			}
			jsonData.push(contentData);

		});

		console.log(jsonData);
		console.log("TOTAL: " + jsonData.length)
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});