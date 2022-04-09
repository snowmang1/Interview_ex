'use strict';

// imports
const express = require('express');
// this date library is from https://github.com/knowledgecode/date-and-time#compileformatstring
const date = require('date-and-time');

// Constants for server info
// const PORT = process.env.PORT; This will not work with heroku's dynamic port
const HOST = '0.0.0.0';

// timestamp format
const pattern = date.compile('YYYY/MM/DD h:m:s A');

var data = {
	message: 'My name is Evan Drake',
	timestamp: date.format(new Date(), pattern)
};

// App
const app = express();
// request will go to root '/'
app.get('/', (req, res) => {
	// res.json will serialize json objects
	res.send(res.json(data));
});

// create connection
app.listen(process.env.PORT, HOST);// pulling dynamic port from process.env.PORT for dyno support
console.log(`Running on http://${HOST}:${PORT}`);
