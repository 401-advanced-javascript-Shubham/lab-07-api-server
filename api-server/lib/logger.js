// module.exports = (req, res, next) => {
//   console.log('__REQUEST__', req.method, req.path);
//   next();
// }

'use strict';

module.exports = (req,res,next) => {
  req.requestTime = new Date(Date.now()).toLocaleString();
  console.log(`Request time: ${req.requestTime} Method: ${req.method} Path: ${req.url} Message: ${req.message}`);
  next();
};