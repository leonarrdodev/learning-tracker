const express = require('express');
const app = express();
const path = require('node:path')
const trackRoutes = require('./routes/trackRoutes')
const {format} = require('date-fns')
const {ptBR} = require('date-fns/locale')

app.use((req, res, next) => {
  res.locals.format = format;
  res.locals.ptBR = ptBR
  next();
});
app.use('/tracks', trackRoutes)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

module.exports = app;
