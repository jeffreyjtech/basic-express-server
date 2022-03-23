'use strict';

function validator(req, res, next) {
  if (req.query.name === undefined) {
    console.error('Received query with no "name"');
    next(new Error);
  }
  else next();
}

module.exports = validator;