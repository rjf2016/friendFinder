// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//var htmlroutes = require('./app/routing/html-routes.js');
//var apiroutes =  require('./app/routing/api-routes.js');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = Number(process.env.PORT || 3000);


// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use("/css", express.static(__dirname + '/app/public/assets/css'));
app.use("/images", express.static(__dirname + '/app/public/assets/images'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);



app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

