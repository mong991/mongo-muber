const express = require('express');

const app = express();

// wactch for incoming requests of method GET
// to the route http://locahost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' }); //send back
});

// app.post('/api');
// app.put('/api');
// app.delete('/api');

module.exports = app;
