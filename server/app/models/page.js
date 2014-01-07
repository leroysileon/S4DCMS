/**
 * Module dependencies.
 */
var mongoose;
mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Schema definitions */
var schemaName = Schema({
	title: {type: String, required: true, unique: true},
	description: {type: String},
	modificationDate: {type: Date, "default": Date.now}
});
 
 // Custom validator
 schemaName.path('title').validate(function (val) {
 	return (val !== undefined && val !== null && val.length >= 8);
 }, 'Invalid title');

var modelName = "Page";
var collectionName = "pages"; // Naming convention is plural.
mongoose.model(modelName, schemaName, collectionName);

