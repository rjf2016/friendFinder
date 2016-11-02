
var friendsData = require('../data/friends.js');

module.exports = function (app) {



app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});


app.post('/api/friends', function (req, res) {
			
			var newName = req.body.name;
			var newPhoto = req.body.photo;
			var newScores = req.body.scores;
			
			var bestmatch = FindBestFriend(newName, newPhoto, newScores);
			
			friendsData.push(req.body);
			
			var str = "{" + '"' + "name" + '"' + ": " + '"' + friendsData[bestmatch].name + '"' + "," + '"' + "photo" + '"' + ": " + '"' + friendsData[bestmatch].photo + '"' + "}";

 			res.contentType('application/json');
			
 			var personJSON = JSON.stringify(str);
 			res.send(personJSON);
			 
	});
	
function FindBestFriend(newName, newPhoto, newScores)
{
	var bestScore = 1000;  //arbitrary starting point
	var bestMatch = "";
	var sum=0;
	for(var i=0; i<=friendsData.length-1; i++) {
      	
      	for(var j=0; j<friendsData[i].scores.length-1; j++){
   	  		sum += Math.abs( newScores[j] - friendsData[i].scores[j] ); 
   	  		console.log(friendsData[i].name + ": " + newScores[j] + "-" + friendsData[i].scores[j]  + " = " + Math.abs( newScores[j] - friendsData[i].scores[j] ));
			}
			console.log("");
			

			if(sum <= bestScore){
 				bestScore = sum;
 				bestMatch = i;
 			}
 			
 			sum=0;
 	}

 	return bestMatch;  //returns the index in friendsData of the person with the closest matching score
 }
};