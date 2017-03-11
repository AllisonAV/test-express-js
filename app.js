const express = require('express');
//creates an instance of an express application
const app = express();
const volleyball = require('volleyball');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const path = require('path');

// templating boilerplate setup for nunjucks
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
app.set('view engine', 'html'); // have res.render work with html files
nunjucks.configure('views', {noCashe: true}); // point nunjucks to the proper directory for templates

//loggint middleware
app.use(volleyball);

//start the server
//tell app to listen for requests
app.listen(3113, function(){
	console.log(chalk.magenta('Listening on port 3113!!'));
});


//static routing
app.use(express.static(path.join(__dirname, '/public')));


//setup modular routing
app.use('/', routes);


