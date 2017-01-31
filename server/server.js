const express = require('express');
const bodyparser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('webpack')(require('../webpack.config.js'));

const app = express();

app.use(bodyparser.json());
app.use(webpackMiddleware(webpackConfig, {}));
app.use(webpackHotMiddleware(webpackConfig));
app.use(express.static(`${__dirname}./../client/public`));

app.listen(8000);
console.log('listening on Port 8000');