const express = require('express');
const app = express();
const port = 3000;
const show = require('./lib/show.js');



app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  res.send('Online Users');
});

app.get('/showusers', async (req, res) => {
  const id = Number(req.params.id);

  const { times } = await show();

  res.json({ times });
});


app.listen(port)
