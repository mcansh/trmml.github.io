var express = require('express');
var app = express();


app.get('/', function(req, res) {

	res.send({
		message:"There'll be something here soon.",
		author: {
			name: "Josh Trommel",
			twitter: "@nulljosh",
			github: "probablyjosh",
			email: "joshtrommel at gmail dot com",
			resume: "/resume.pdf"
		}
	});
});


app.listen(3000);