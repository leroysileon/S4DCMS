var express		= require('express'),
	passport	= require('passport'),
	db			= require('./routes/mongodb/schemas'),
	path		= require('path');

var app			= express();
	server		= require('http').createServer(app),
	io			= require('socket.io').listen(server);
	
var query		= require('./routes/functions')(app, db),
	config		= require('./routes/config');
	
app.configure( function() {
	app.set('port', process.env.PORT || config.domain.port);
	app.set('views', __dirname + '/views');
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(path.join(__dirname, 'public')));
});

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});