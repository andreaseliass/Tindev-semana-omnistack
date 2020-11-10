const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const routes = require('./routes');

const server = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
});

server.use(express.json()); 
server.use(routes);

server.listen(3333);