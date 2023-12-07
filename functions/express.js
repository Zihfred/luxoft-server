const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Netlify with AWS Lambda!' });
});

module.exports.handler = serverless(app);