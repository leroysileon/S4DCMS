module.exports = function (app) {
    
    var controller = require('../app/controllers/blogs.js');

    // CREATE
    app.post('/blogs', controller.create);

    // RETRIEVE
    app.get('/blogs', controller.list);
    app.get('/blogs/:_id', controller.detail);

    // UPDATE
    app.put('/blogs/:_id', controller.update);
    
    // DELETE
    app.delete('/blogs/:_id', controller.delete);

}
