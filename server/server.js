var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes');

app.use(express.static(path.join(__dirname, '../client')));

// Test Routes
app.get('/test',(req, res) => {
  console.log('inside "GET" reqest');
  res.status(200).json({"AJAX":"'GET' response from Server"});
})
app.post('/test',(req, res) => {
  console.log('inside "POST" reqest');
  res.status(200).json({"AJAX":"'POST' response from Server"});
})

// Mount middleware &
// Expose routes
require("./middleware")(app);
app.use('/api', router);

module.exports = app;
