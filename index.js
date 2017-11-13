require('dotenv').config()
var express = require('express');
var Hush = require('bitcoin');

var client = new Hush.Client({
  host: process.env.RPC_HOST,
  port: process.env.RPC_PORT,
  user: process.env.RPC_USER,
  pass: process.env.RPC_PASSWORD,
  timeout: 30000
});

var app = express();

app.get('/api', (req, res) => {
  res.json({message: 'Welcome to the Server'});
});

app.get('/api/blockcount', (req, res) => {
  client.cmd('getblockcount', function(err, blockcount, resHeaders){
    if (err) return console.log(err);
    res.json({message: blockcount});
  });
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
