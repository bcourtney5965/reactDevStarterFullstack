var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client')));

var port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());

app.post('/api/test', function(req, res) {
  console.log('inside ajax req');
  console.log(`req.body.from = ${req.body.from}`);
  res.status(200).json({"from":"server /api/test"});
})

app.listen(port, () => {
  console.log(`AJAX with React listening on port# ${port}`);
})
