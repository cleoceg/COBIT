//var mongoose = require( 'mongoose' );
//var Item = mongoose.model('Item');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

exports.sendJSONresponse = sendJSONresponse;