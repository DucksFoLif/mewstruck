const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const StaticDirectory = path.join(__dirname, 'public');

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(StaticDirectory));

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
