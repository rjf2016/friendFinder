/*
var express = require('express');
var path = require('path');
var router = express.Router();

// define the home page route
router.get('/survey', function(req, res) {
  //console.log("sending html");
  res.sendFile(path.join(__dirname, '../public', 'survey2.html'));

});


router.use(function(req, res, next) {
  //console.log("In html_routes use...");
  res.sendFile(path.join(__dirname, '../public', 'home2.html'));
  next();
});

module.exports = router;
*/

var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public', 'survey2.html'));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, '../public', 'home2.html'));
	});
};