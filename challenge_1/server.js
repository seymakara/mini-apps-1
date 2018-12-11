const express = require('express');
const path = require('path');
const app = express();
const host = 'localhost';
const port = 3000;

app.use(express.static('./app'));
app.use(express.static('/app/app.js'));


app.listen(port, host, () => console.log(`Listening on port ${port}`))