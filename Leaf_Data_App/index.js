require('dotenv').config();
var express = require('express');
var app = express();
var requestPromise = require('request-promise');
var bodyParser = require('body-parser');

var apiKey = process.env.API_KEY;
var catalog  = process.env.URI_CATALOG;
var info = process.env.URI_INFO; 

app.use(express.static(__dirname+'/public/'));


var GetCatalogOptions = {
	uri: catalog,
	headers:{
		'x-mjf-organization-id': '9',
		'Content-Type': 'application/json',
		'x-mjf-api-key': apiKey
	},
	json: true
};

var GetInfoOptions = {
	uri: info,
	headers:{
		'x-mjf-organization-id': '9',
		'Content-Type': 'application/json',
		'x-mjf-api-key': apiKey
	},
	json: true
};


app.get('/api/catalog', function(req,res){
	console.log('hit api/catalog');
	
	requestPromise(GetCatalogOptions)
		.then(function(info){
			console.log(info);
			res.json(info);
		})
		.catch(function(err){
			console.log(err);
		});
	
});


app.get('/api/info', function(req,res){
	console.log('hit api/index');
	
	requestPromise(GetInfoOptions)
		.then(function(info){
			console.log(info);
			res.json(info);
		})
		.catch(function(err){
			console.log(err);
		});
	
});


var payload;
var postOptions1 = {
	method: 'POST',
	uri:catalog,
	
	headers:{
		'x-mjf-organization-id': '9',
		'Content-Type': 'application/json',
		'x-mjf-api-key': apiKey
	},
	json:true
};

app.post('/api/catalog/', function(req,res){
	console.log('POSTING....');
	var incoming = req.body;
	
	console.log('req.params', incoming);

	// requestPromise(postOptions1)
	// 	.then(function(parsedBody){
	// 		console.log('post succeeded');
	// 	})
	// 	.catch(function(err){
	// 		console.log('post failed: ', err);
	// 	});
});



app.listen(3000);
console.log('listening on 3000');