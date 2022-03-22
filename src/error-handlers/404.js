'use strict';

function handle404(err, req, res, next) {
  console.error('Not-Found', err);
  res.status(404).send('Not-Found');
}

module.exports = handle404;