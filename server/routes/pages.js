module.exports = function (app) {
    
    var controller = require('../app/controllers/pages.js');

    // CREATE
    app.post('/pages', controller.create);

    // RETRIEVE
    app.get('/pages', controller.list);
    app.get('/pages/:_id', controller.detail);

    // UPDATE
    app.put('/pages/:_id', controller.update);
    
    // DELETE
    app.delete('/pages/:_id', controller.delete);

}
