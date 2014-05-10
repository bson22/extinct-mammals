var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mammals')

var mammalSchema = new mongoose.Schema({
	name: String, 
	type: String, 
	year_extinct: Date
});

var Mammal = mongoose.model('mammals', mammalSchema);

module.exports = Mammal;