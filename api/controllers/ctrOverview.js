var txtOvw = require('../../model/overview');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Executive Overview
module.exports.Overview = function (req, res) {
	var response = {
		needs: txtOvw.needs,
		focusarea: txtOvw.focusarea,
		product: txtOvw.product,
		components: txtOvw.components
	};
	sendJSONresponse(res, '200', response);
};
