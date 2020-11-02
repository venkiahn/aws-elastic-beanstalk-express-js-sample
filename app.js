const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome World! This is a site by Nolan Venkiah.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
