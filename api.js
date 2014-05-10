//var express = require('express');
var mongoose = require('mongoose');

var Mammal = require('./mammal.js')


var findMammals = function (req, res, conditional) {
	var query = Mammal.find(conditional);

	if (req.query.order_by)
		query.sort(req.query.order_by);

	query.exec(function (err, mammals) {
		if (err) return res.json(500, err)

		res.json(200, mammals)
	}); 
};

exports.get = function (req, res) {
	findMammals(req, res);
};

exports.type = function (req, res) {
	findMammals(req, res, {type: req.params.type});
};

// ORIGINAL GET Request to output mammals in mammalSchema
// exports.index = function (req, res) {
// 	//console.log('get request');
// 	// console.log(Mammal.find());
// 	Mammal
// 		.find()
// 		.sort('name')  //find and sort prior to callback
// 		.exec(function (err, mammals) {  //exec and call the callback
// 		if (err) return res.json(500, err);
// 		res.json(200, mammals);
// 	});

	//var query = Mammal.find();

//ANOTHER WAY TO DO THE ABOVE FUNCTION
	// query.sort('name');
	// query.exec(function (err, mammals) {  //exec and call the callback
	// 	if (err) return res.json(500, err);
	// 	res.json(200, mammals);	
//};

//POST 
exports.create = function (req, res) {
	var newMammal = new Mammal(req.body);
	console.log(req.body);
	newMammal.save(function (err, mammals) {
		if (err) return res.json(500, err);
		res.json(201, mammals);
	})
};


//Original Exports Type
// exports.type = function(req, res) {
// 	Mammal
// 		.find({type: req.params.type})
// 		.sort('name')
// 		.exec(function (err, mammals) {
// 			if (err) return res.json(500, err);
// 			res.json(200,mammals);
// 		});
// };