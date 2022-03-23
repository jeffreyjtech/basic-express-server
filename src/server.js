'use strict';

// Import dependencies
const express = require('express');
const dotenv = require('dotenv'); // eslint-disable-line

// Use dependencies
const app = express();

// Import modules
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

function handlePerson(req, res, next) {
  console.log('Handling person', '\n Received query:', req.query);
  res.send({ name: req.query.name });
}

// .use() catch-all handlers
app.use(logger);

// ROUTES
app.get('/person', logger, validator, handlePerson);
// app.get('/error', forceError);

// start function
function start(PORT) {
  app.listen(PORT, () => {
    console.log('Server listening!');
  });
}

// function forceError(req, res, next) {
//   let err = new Error;
//   next(err);
// }

app.get('*', (req, res, next) => {
  let err = new Error;
  err.status = 404;
  next(err);
});


// .use() error handlers
app.use(handle404);
app.use(handle500);

module.exports = {
  start: start,
  app: app,
};