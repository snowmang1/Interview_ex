'use strict';

// imports
const express = require('express');
// this date library is from https://github.com/knowledgecode/date-and-time#compileformatstring
const date = require('date-and-time');

// Constants for server info
const PORT = 80; // pulling dynamic port from process.env.PORT for dyno support
const HOST = '172.17.0.1'; // localhost

// timestamp format

var data = {
	message: 'My name is Evan Drake',
	timestamp: Math.floor(new Date() / 1000)
	// port: PORT
};

// App
const app = express();
// request will go to root '/'
app.get('/', (res) => {
	// res.json will serialize json objects
	res.send(res.json(data));
});

// create connection
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
