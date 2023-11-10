console.log("Now preparing Express");

const express = require('express');
const path = require('path');
//Now the bad code
let a1p1 = 0;
let a2p1 = 0;
let allvotes1 = 0;

const app = express();
const port = process.env.PORT || 8080;

console.log("Now routing URL's");

// Startpage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


//poll Voting interface
app.get('/poll', function(req, res) {
	const voteid = req.query.voteid;
	if (voteid == undefined) {
	  res.status(400).send("<h1>403: Bad request, URL Argument voteid not filled out/not in URL (Example: /poll?voteid=1234)</h1><br><br><br><p>Voting Site by Stoppedwumm</p>");
	} else {
		res.sendFile(path.join(__dirname, '/poll/' + voteid + ".html"));
	};
});

//Record Results
app.get('/poll/pollresults', function(req, res) {
	const voteid = req.query.id
	if (voteid == 1){
		if (req.query.pollanswer == "a1"){
			a1p1++;
			allvotes1++;
			res.status(200).sendFile(path.join(__dirname, '/messages/success.html'));
		};
		if (req.query.pollanswer == "a2"){
			a2p1++;
			allvotes1++;
			res.status(200).sendFile(path.join(__dirname, '/messages/success.html'));
		};
	};
});

//Get Results via JSON
app.get('/poll/getresults', function(req, res) {
	const pollid = req.query.id;
	const resetpoll = req.query.r;
	if (pollid == 1) {
		res.status(200).send({
			'totalVotes': allvotes1,
			'Answer 1 (Eis)': a1p1,
			'Answer 2 (Schokolade)': a2p1
		});
	} else {
		res.status(404).send("Poll does not exist");
		console.log("CLIENT: ERROR: /poll/getresults?id=" + pollid + ": 404, Poll does not exist");
	};
	if (resetpoll == 1) {
		if (pollid == 1) {
			a1p1 = 0;
			a2p1 = 0;
			allvotes1 = 0;
		};
	};
});

// Listening
console.log("Listening is about to start");
app.listen(port);
console.log('Server up and running at http://localhost:' + port);
//Done
