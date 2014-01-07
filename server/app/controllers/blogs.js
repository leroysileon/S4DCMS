var mongoose = require('mongoose')
    , Blog = mongoose.model('Blog');


exports.create = function (req, res) {
	
	console.log('CREATE blog.');
	
	var doc = new Blog(req.body);
	
	doc.save(function (err) {
	
		var retObj = {
			meta: {"action": "create", 'timestamp': new Date(), filename: __filename},
			doc: doc,
			err: err
		};
		
		return res.send(retObj);
		
	});
	
}
 
 exports.list = function (req, res) {
 	var conditions, fields, options;
 	
 	console.log('GET blogs.');
 	
 	conditions = {};
 	fields = {};
 	sort = {'modificationDate': -1};
 	
 	Blog
 		.find(conditions, fields, options)
 		.sort(sort)
 		.exec(function (err, doc) {
 		
 			var retObj = {
 				meta: {"action": "list", 'timestamp': new Date(), filename: __filename},
 				doc: doc, // array
 				err: err
 			};
 			
 			return res.send(retObj);
 			
 		})
 		
 }

exports.detail = function (req, res) {
	var conditions, fields, options;
	
	console.log('GET blogs.' + req.params._id);
	
	conditions = {_id: req.params._id}
		, fields = {}
		, options = {'createdAt': -1};
	
	Blog
		.find(conditions, fields, options)
		.exec(function (err, doc) {
		
			var retObj = {
				meta: {"action": "detail", 'timestamp': new Date(), filename: __filename},
				doc: doc[0], // only the first document, not an array when using "find"
				err: err
			};
			
			return res.send(retObj);
			
		})
		
}


// UPDATE
exports.update = function (req, res) {
	console.log('Updating blog...\n', req.params_id, req.body);
	
	var conditions =
		{_id: req.params._id}
		, update = {
			title: req.body.title || '',
			author: req.body.author || '',
			description: req.body.description || ''
		}
		, options = { multi: false }
		, callback = function (err, doc) {
			var retObj = {
				meta: {"action": "update", 'timestamp': new Date(), filename: __filename},
				doc: doc,
				err: err
			};
			return res.send(retObj);
		};
	Blog
		.findOneAndUpdate(conditions, update, options, callback);
}


// DELETE
exports.delete = function (req, res) {
	var conditions, callback, retObj;
	
	console.log('Deleting blog.', req.params_id);
	
	conditions = {_id: req.params._id}
		, callback = function (err, doc) {
			retObj = {
				meta: {"action": "delete", 'timestamp': new Date(), filename: __filename},
				doc: doc,
				err: err
			};
			return res.send(retObj);
		};
	Blog
		.remove(conditions, callback);
}