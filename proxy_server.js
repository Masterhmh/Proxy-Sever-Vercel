// server.js (Node.js với Express)
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.all('/proxy', async (req, res) => {
  const gasUrl = 'https://script.google.com/macros/s/AKfycbzQQFzbEpmIHRNyYTG6trUOvZx4fE6FX886aOGPXyID_wIuP3x0FWdRZf4Q4yrVW75bow/exec';
  const response = await fetch(gasUrl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
