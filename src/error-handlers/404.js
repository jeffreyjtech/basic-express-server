'use strict';

function handle404(err, req, res, next) {
  if(err.status === 404) {
    console.log('Not-Found');
    res.status(404).send('Not-Found');
  } else {
    next(err);
  }
}

module.exports = handle404;