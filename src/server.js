'use strict';

// Import dependencies
const express = require('express');
const dotenv = require('dotenv'); // eslint-disable-line

// Use dependencies
const app = express();

// Import modules
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handler404 = require('./error-handlers/404.js');
const handler500 = require('./error-handlers/500.js');

// start function
function start(PORT) {
  app.listen(PORT, () => {
    console.log('Server listening!');
  });
}

module.exports = {
  start: start,
};