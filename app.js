const express = require('express');
const volleyball = require('volleyball');
const chalk = require('chalk');

//creates an instance of an express application
const app = express();






app.use(volleyball);
//simple route to root page
app.get('/', function(req, res) {
	res.send('Welcome to my web page!!!');
});




//at bottom of page
//tell app to listen for requests
app.listen(3113, function(){
	console.log(chalk.magenta('Listening on port 3113!!'));
});