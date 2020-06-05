const http = require('http');
// const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({extended: false});

// подключаем шаблоны
app.set('view engine', 'ejs');

//подключаем статические файлы
app.use('/public', express.static('public'));
//-------это сслыка--------------а это папка в проекте----



//маршрутизация
app.get(['/index', '/'], urlencodedParser, (request,response)=>{
	response.sendFile(__dirname + '/index.html');

});

//план схема
app.get('/step-one-scheme/:id', (request, response)=>{
	response.render('step-one-scheme',{newsID: request.params.id});
});

// покупка
app.get('/step-material/:id', (request, response)=>{
	response.render('step-material',{newsID: request.params.id});
});

app.get('/step-walls/:id', (request, response)=>{
	response.render('step-walls',{newsID: request.params.id});
});

app.get('/step-wire-mounting/:id', (request, response)=>{
	response.render('step-wire-mounting',{newsID: request.params.id});
});

app.get('/electricity', (request, response)=>{
	// response.render('electricity',{newsID: request.params.id});
	response.render('electricity');
});


// если страницы нет 
app.get(['/:id', '/:id/:id'], urlencodedParser, (request,response)=>{
	response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
	response.write(`<h1>404. Page ${request.params.id} Not fount site</h1>`);
	response.write(`<a href = "/index">Перейти к главной странице</a>`);
	response.end();
});


// запускаем сервер
app.listen(port, hostname, ()=>{
	console.log(`Server running at http://${hostname}:${port}/`);

});

// const server = http.createServer((request, response)=>{
	


// 	console.log(`Method ${request.method}`);
// 	console.log('URL страницы запрос: ' +request.url);
// 	// console.log('URL страницы ответ: ' +response.url);

// 	switch(request.url){
// 		case  '/':
// 		case '/index':
// 			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
// 			fs.createReadStream(__dirname + '/index.html').pipe(response);
// 			break;
// 		case '/index.js':
// 			response.writeHead(200, {'Content-Type': 'text/javascript'});
// 			fs.createReadStream(__dirname + '/index.js').pipe(response);
// 			break;
// 		// case '/js/index.js':
// 		// 	response.writeHead(200, {'Content-Type': 'text/javascript'});
// 		// 	fs.createReadStream(__dirname + '/js/index.js').pipe(response);
// 		// 	break;
// 		case '/form':
// 			// response.writeHead(200, {'Content-Type': 'text/javascript'});
// 			// fs.createReadStream(__dirname + '/js/form.js').pipe(response);
// 			console.log(request.statusMessage);
// 			response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
// 			response.write('<h1>Ok</h1>');
// 			response.end();

// 			break;
// 		default:
// 			response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
// 			response.write('<h1>404. Not fount site</h1>');
// 			response.end();
// 	}

// });

// server.listen(port, hostname, ()=>{
// 	console.log(`Server running at http://${hostname}:${port}/`);

// });

