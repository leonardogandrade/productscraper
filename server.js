const express = require('express');
const server = express();
//const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Configs
server.use(cors());
server.use(express.json());

//Models
require('./src/models/product-model');

//Routes
server.use('/api', require('./src/routes'));

module.exports = server;