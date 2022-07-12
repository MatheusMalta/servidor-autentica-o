const express = require('express');
const show = require('./lib/show.js');

//import show from './lib/show.js';
//import express from 'express';
const app = express();
const port = 3000;





app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  res.send('Online Users');
});

app.get('/showusers', async (req, res) => {
  const id = Number(req.params.id);

  const { stdout } = await show();

  res.json({ times });
});


app.listen(port)
