/**
 * Example request : 
 * curl 'http://localhost:8001/' \
       -H 'Content-Type: application/json' 
       --data-binary '{"name":"Jhon Doe","email":"jhondoe@gmail.com","comment":"This is john Doe mock comment."}' \
        --compressed
 */
const http = require('http');
// const { parse } = require('querystring');
const {insertComment} = require('./database')

const hostname = 'localhost';
const port = 8001;

const server = http.createServer((request, response) => {
  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain');
  // response.setHeader('Access-Control-Allow-Origin', '*' );
  // response.end('ok');
  // Set CORS headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	response.setHeader('Access-Control-Allow-Headers', '*');
	if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
		return;
  }
  response.end('ok');
  let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  console.log("Request Body:", body.length)
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
  console.log("Request Body:", body)
  if(body) {
    const data = JSON.parse(body);
    insertComment(data.name, data.email, data.comment)
    console.log("Added comment: ", data)
  }
});

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});