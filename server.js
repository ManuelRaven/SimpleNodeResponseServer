var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text({type: '*/*'}));
app.get('/r/:id', function (req, res) {
	var user = {param : req.params.id, ip : req.ip}; 
	res.end(JSON.stringify([user]));
})

app.get('/g/', function (req, res) {
	var obj;
	var id = req.query.id;
	res.end('Response for you: ' + JSON.stringify(id));
	
})

app.post('/p/', function(req,res) {
	console.log(req.body);
	console.log(JSON.stringify(req.body));
	res.send("Response for you : " + req.body);
})

app.get('/h/', function (req, res) {
	var id = req.headers;
	res.end('Response for you: ' + JSON.stringify(id));
	
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})