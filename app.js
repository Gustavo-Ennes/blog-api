const express = require('express');
const app = express();
const postRouter = require('./routes/index')

app.use('/', postRouter)

module.exports = app