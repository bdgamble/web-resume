'use strict';

var nodeStatic = require('node-static'),
    port = 8000;

var file = new nodeStatic.Server();

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		file.serve(request, response);
	}).resume();
}).listen(port);

console.log('Listening on port', port)