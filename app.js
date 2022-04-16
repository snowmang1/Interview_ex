'use strict';

// imports
const express = require('express');
// this date library is from https://github.com/knowledgecode/date-and-time#compileformatstring
const date = require('date-and-time');

// Constants for server info
const PORT = (process.env.PORT || 80); // pulling dynamic port from process.env.PORT for dyno support
const HOST = '0.0.0.0';

var data = {
	message: 'My name is Evan Drake',
	timestamp: Date.now(),
	port: "PORT"
};

// App
const app = express();
// request will go to root '/'
app.get('/', (req, res) => {
	// res.json will serialize json objects
	res.send(res.json(data));
});

// create connection
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
