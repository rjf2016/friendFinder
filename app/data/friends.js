// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var tableArray = [
	{
		name: 'Doug Heffernan',
		photo: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Heffernan,_Doug.jpg',
		scores: ["1","1","4","1","1","1","2","2","1","1"]
	},
	{
		name: 'George Costanza',
		photo: 'http://vignette1.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest?cb=20110406222711',
		scores: ["3","1","3","3","3","1","2","3","3","1"]
	},
	{
		name: 'Joey Tribbiani',
		photo: 'http://vignette3.wikia.nocookie.net/centralperkfriends/images/b/b2/Pic_1212143429_11.jpg/revision/latest?cb=20110603052045',
		scores: ["5","5","4","4","5","5","5","5","4","5"]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
