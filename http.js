var http = require("http"),
  fs = require("fs");
  http.createServer(function (request, response) {
        if (request.url == '/') {
           fs.readFile('test.txt', 'utf-8', function (error, data) {
              response.writeHead(200, {
                 'Content-Type': 'text/plain'
              });
			  var time = Math.round((new Date()).getTime() / 1000);
			  var usr= request.headers['user-agent']
              data = parseInt(data) + 1;
              fs.writeFile('test.txt', time + ' , ' + usr);
			  console.log( time + ' , ' + usr);
              response.end(time + ' , ' + usr);
           });
        } else {
           response.writeHead(404);
           response.end();
        }
  }).listen(8080);