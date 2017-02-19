var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text({type: '*/*'}));
app.get('/rr/nachname/:nachname', function (req, res) {
	res.end(req.params.nachname);
})

app.get('/rq/', function (req, res) {
	var obj;
	var id = req.query.name;
	res.end('Response for you: ' + JSON.stringify(id));
	
})

app.post('/p/', function(req,res) {
	console.log(req.body);
	console.log(JSON.stringify(req.body));
	res.send("Response for you : " + req.body + "\n Extras: " + req.query.extra);
})

app.get('/h/', function (req, res) {
	var id = req.headers;
	res.end('Response for you: ' + JSON.stringify(id));
	
})

app.get('/h2/', function (req, res) {
 var contype = req.headers['content-type'];
  if (!contype || contype.indexOf('application/json') !== 0)
    return res.status(400).send("Only JSON Allowed, your content type is: " + contype);
	var id = req.headers;
	res.end('Response for you: ' + JSON.stringify(id));
})

app.get('/uhrzeit/', function (req, res) {
	var id = req.headers;
	console.log(req.get('Accept'));
	if(/application\/json/.test(req.get('Accept'))) {
		var newDate = new Date();
    res.send(JSON.stringify(newDate.toLocaleTimeString()));
	} else {
	res.status(406).send('Sorry, this method serves only json. You Requested : ' + req.get('Accept'));
	}
})

app.options('*', function(req, res) {
    res.send("GET - /rr/nachname/value - ROUTE PARAMETER TEST \n GET - /rq/?name=value - QUERY PARAMETER TEST \n POST - /p - POST TEST \n GET - /h - HEADER TEST \n GET - /h2 -HEADER TEST CONTENT-TYPE \n GET - /uhrzeit - HEADER TEST ACCEPT");
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})