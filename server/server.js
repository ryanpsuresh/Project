const express = require('express');

const app = express();

app.use(express.static(`${__dirname}./../client/public`));

app.listen(8000);
console.log('listening on Port 8000');