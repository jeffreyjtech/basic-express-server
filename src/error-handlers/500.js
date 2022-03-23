'use strict';

function handle500(err, req, res, next) {
  console.log('Server Error', err);
  res.status(500).send('Server Error');
}

module.exports = handle500;