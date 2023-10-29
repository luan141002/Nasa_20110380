const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const app = express();
const planetRouter = require('./routes/planets/planets.router.js');
const launchesRouter = require('./routes/launches/launches.router.js');

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app;
