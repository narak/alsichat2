/**
 * Module dependencies.
 */
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  // Config file.
  , config = require('./appConfig.js')
  // Route includes.
  , index = require('./routes/index.js')
  , threads = require('./routes/threads.js');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger({stream: fs.createWriteStream(config.paths.logFile, {flags: 'a'})}));
  app.use(express.bodyParser());
  app.use(express.methodOverride()); // HTTP method override for PUT, DELETE.
  app.use(express.cookieParser('d3a6cf67dd707a59bebf637b6dd6687c724e085bbe6abae128f48ddc14c10094'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(function(req, res) {
    res.render('index', { title: 'alsichat v0.2' });
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Threads routes
app.get('/threads', threads.get);
app.get('/threads/:id', threads.getOne);
app.post('/threads', threads.save);
app.post('/threads/:id?_method=PUT', threads.save);
app.post('/threads/:id?_method=DELETE', threads.delete);

// Root route
app.get('/', index.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Alsichat v" + config.alsichat.version + " listening on port " + app.get('port'));
});