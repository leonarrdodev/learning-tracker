const express = require('express');
const app = express();
const path = require('node:path')
const trackRoutes = require('./routes/trackRoutes')

app.use('/tracks', trackRoutes)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

module.exports = app;
