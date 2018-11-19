"use strict";

// Npm Packegaes
const express = require('express');

const PORT = process.env.PORT || 80

// Server.
const app = express();

app.use(express.static('public'));

app.use(function (err, req, res, next) {
  res.send('/index.html')
})

// Home page.
app.get('/', ((req, res) => {
  res.send('index.html')
}))

app.get('*', ((req, res) => {
  res.sendFile(__dirname + '/public/index.html')
}))

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});