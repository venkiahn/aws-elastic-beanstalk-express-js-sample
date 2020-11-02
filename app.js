const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome World! You have arrived at a site created by Nolan Venkiah.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
