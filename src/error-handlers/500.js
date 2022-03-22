'use strict';

function handle500(err, req, res, next) {
  console.error('Server Error', err);
  res.status(500).send('Server Error');
}

module.exports = handle500;