var express = require('express');
var app = express();

var fs = require('fs');
app.set('view engine', 'ejs');

app.get('/', function(req,res) {

	var object = {

		title: "Home",
		subtitle: "Homepage for the Mandatory Asignment",
		paragraph: "Greg learns Express Stuff! yEEEY!!!"
	}

	res.render('index', object);
});

app.get('/about', function(req,res){

	fs.readFile('about.json', 'utf-8', function(err,data) {
		if(err) {
			console.log('some unknown error here!!!');
		} else {
			res.render('about', JSON.parse(data));
		}
	});

});

app.listen(3000);